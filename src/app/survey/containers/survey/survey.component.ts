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

import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MessageService } from 'primeng/api';

import { PersonHttpService } from '../../services/person-http.service';
import { Person } from '../../models/person.model';
import { SurveySubject } from '../../models/survey-subject.model';
import { SurveySubjectHttpService } from '../../services/survey-subject-http.service';
import { Score } from '../../models/score.model';
import { SurveyHttpService } from '../../services/survey-http.service';
import { Survey } from '../../models/survey.model';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SurveyComponent implements OnInit, OnDestroy {
  private readonly destroy$ = new Subject<void>();
  private readonly savePersonAction$ = new Subject<Person>();
  private readonly findSurveySubjectsAction$ = new Subject<void>();
  private readonly saveSurveyAction$ = new Subject<Score[]>();
  loading$ = new BehaviorSubject<boolean>(false);
  person$: Observable<Person>;
  surveySubjects$: Observable<SurveySubject[]>;
  survey$: Observable<Survey>;

  constructor(
    private readonly personHttpService: PersonHttpService,
    private readonly surveySubjectHttpService: SurveySubjectHttpService,
    private readonly surveyHttpService: SurveyHttpService,
    private readonly router: Router,
    private readonly messageService: MessageService,
  ) {
    this.person$ = this.savePersonAction$.pipe(
      tap(() => this.loading$.next(true)),
      switchMap((person: Person) =>
        this.personHttpService.save(person).pipe(
          catchError(() => {
            this.handleError();
            return EMPTY;
          }),
        ),
      ),
      tap(() => {
        this.findSurveySubjectsAction$.next();
      }),
      shareReplay(),
    );
    this.surveySubjects$ = this.findSurveySubjectsAction$.pipe(
      switchMap(() =>
        this.surveySubjectHttpService.findSurveySubjects().pipe(
          catchError(() => {
            this.handleError();
            return EMPTY;
          }),
        ),
      ),
      tap(() => this.loading$.next(false)),
    );
    this.survey$ = this.saveSurveyAction$.pipe(
      tap(() => this.loading$.next(true)),
      withLatestFrom(this.person$),
      switchMap(([scores, person]) =>
        this.surveyHttpService
          .save({
            person: person,
            scores: scores,
          })
          .pipe(
            catchError(() => {
              this.handleError();
              return EMPTY;
            }),
          ),
      ),
      tap(() => {
        this.loading$.next(false);
        this.router.navigate(['survey', 'dashboard']);
      }),
    );
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngOnInit(): void {
    this.survey$.pipe(takeUntil(this.destroy$)).subscribe();
  }

  onSavePersonRequested(person: Person) {
    this.savePersonAction$.next(person);
  }

  onSaveSurveyRequested(scores: Score[]): void {
    this.saveSurveyAction$.next(scores);
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
