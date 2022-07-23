import { BehaviorSubject, catchError, EMPTY, map, Observable, tap } from 'rxjs';

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { SurveyHttpService } from '../../services/survey-http.service';
import { Survey } from '../../models/survey.model';
import { mapToDoughnutData } from '../../utils/survey-mapper';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
  loading$ = new BehaviorSubject<boolean>(false);
  surveys$: Observable<Survey[]>;
  data: any = {};
  title = 'Algemene score';

  constructor(private readonly surveyHttpService: SurveyHttpService, private readonly messageService: MessageService) {}

  ngOnInit(): void {
    this.loading$.next(true);
    this.surveys$ = this.surveyHttpService.findAll().pipe(
      map((response: Survey[]) => mapToDoughnutData(response)),
      tap((mappeData: any) => {
        this.loading$.next(false);
        this.data = mappeData;
      }),
      catchError(() => {
        this.handleError();
        return EMPTY;
      }),
    );
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
