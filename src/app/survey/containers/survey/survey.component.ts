import { BehaviorSubject, Observable, Subject, switchMap, takeUntil, tap, withLatestFrom } from 'rxjs';

import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';

import { PersonHttpService } from '../../services/person-http.service';
import { Person } from '../../models/person.model';
import { SurveySubject } from '../../models/survey-subject.model';
import { SurveySubjectHttpService } from '../../services/survey-subject-http.service';
import { Score } from '../../models/score.model';
import { SurveyHttpService } from '../../services/survey-http.service';
import { Survey } from '../../models/survey.model';
import { Router } from '@angular/router';

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
  title = "Paul's steak tasting";

  constructor(
    private readonly personHttpService: PersonHttpService,
    private readonly surveySubjectHttpService: SurveySubjectHttpService,
    private readonly surveyHttpService: SurveyHttpService,
    private readonly router: Router,
  ) {
    this.person$ = this.savePersonAction$.pipe(
      tap(() => this.loading$.next(true)),
      switchMap((person: Person) => this.personHttpService.save(person)),
      tap(() => {
        this.findSurveySubjectsAction$.next();
      }),
    );
    this.surveySubjects$ = this.findSurveySubjectsAction$.pipe(
      switchMap(() => this.surveySubjectHttpService.findSurveySubjects()),
      tap(() => this.loading$.next(false)),
    );
    this.survey$ = this.saveSurveyAction$.pipe(
      tap(() => this.loading$.next(true)),
      withLatestFrom(this.person$),
      switchMap(([scores, person]) =>
        this.surveyHttpService.save({
          person: person,
          scores: scores,
        }),
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
}
