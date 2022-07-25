import { BehaviorSubject, catchError, EMPTY, map, Observable, Subject, switchMap, tap } from 'rxjs';

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
  private readonly refreshDashboardAction = new Subject<void>();
  loading$ = new BehaviorSubject<boolean>(false);
  surveys$: Observable<Survey[]>;
  data$: Observable<any>;
  data: any = {};
  title = 'Algemene score';

  constructor(private readonly surveyHttpService: SurveyHttpService, private readonly messageService: MessageService) {}

  ngOnInit(): void {
    this.surveys$ = this.surveyHttpService.findAll().pipe(
      catchError(() => {
        this.handleError();
        return EMPTY;
      }),
    );
    this.refreshDashboardAction
      .pipe(
        tap(() => this.loading$.next(true)),
        switchMap(() => this.surveys$),
        map((response: Survey[]) => mapToDoughnutData(response)),
        tap((mappedValue: any) => {
          console.log(mappedValue);
          this.loading$.next(false);
          this.data = mappedValue;
        }),
      )
      .subscribe();
    this.refreshDashboardAction.next();
  }

  private handleError(): void {
    this.loading$.next(false);
    this.messageService.clear();
    this.messageService.add({
      severity: 'error',
      summary: 'Oeps er ging iets verkeerd, neem contact op met Sven.',
    });
  }

  onRefreshSurveysRequested($event: void) {
    this.refreshDashboardAction.next();
  }
}
