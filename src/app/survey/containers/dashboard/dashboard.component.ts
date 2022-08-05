import {
  BehaviorSubject,
  catchError,
  EMPTY,
  Observable,
  shareReplay,
  Subject,
  switchMap,
  takeUntil,
  tap,
  withLatestFrom,
} from 'rxjs';

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { MessageService } from 'primeng/api';

import { SurveyHttpService } from '../../services/survey-http.service';
import { Survey } from '../../models/survey.model';
import { mapToDoughnutData } from '../../utils/survey-mapper';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
  private readonly destroy$ = new Subject<void>();
  private readonly refreshDashboardAction$ = new BehaviorSubject<boolean>(true);
  private readonly mapDoughnutDataAction$ = new Subject<number>();
  loading$ = new BehaviorSubject<boolean>(false);
  surveys$: Observable<Survey[]>;
  data: any = {};

  constructor(private readonly surveyHttpService: SurveyHttpService, private readonly messageService: MessageService) {
    this.surveys$ = this.refreshDashboardAction$.pipe(
      tap(() => this.loading$.next(true)),
      switchMap(() =>
        this.surveyHttpService.findAll().pipe(
          catchError(() => {
            this.handleError();
            return EMPTY;
          }),
        ),
      ),
      tap((response: Survey[]) => {
        this.loading$.next(false);
        this.data = mapToDoughnutData(response);
      }),
      shareReplay(),
    );
  }

  ngOnInit(): void {
    this.mapDoughnutDataAction$
      .pipe(
        takeUntil(this.destroy$),
        withLatestFrom(this.surveys$),
        tap(([index, surveys]) => (this.data = mapToDoughnutData(surveys, index))),
      )
      .subscribe();
  }

  onRefreshSurveysRequested() {
    this.refreshDashboardAction$.next(true);
  }

  onPreviousDoughnutRequested(index: number): void {
    this.mapDoughnutDataAction$.next(index);
  }

  onNextDoughnutRequested(index: number): void {
    this.mapDoughnutDataAction$.next(index);
  }

  private handleError(): void {
    this.loading$.next(false);
    this.messageService.clear();
    this.messageService.add({
      severity: 'error',
      summary: 'Oeps er ging iets verkeerd, neem contact op met Sven.',
    });
  }
}
