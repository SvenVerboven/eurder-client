import { BehaviorSubject, catchError, EMPTY, Observable, Subject, switchMap, takeUntil, tap } from 'rxjs';

import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';

import { ConfirmationService, MessageService } from 'primeng/api';

import { PersonHttpService } from '../../services/person-http.service';
import { Person } from '../../models/person.model';
import { SurveyHttpService } from '../../services/survey-http.service';
import { Survey } from '../../models/survey.model';
import { SurveySubjectHttpService } from '../../services/survey-subject-http.service';
import { SurveySubject } from '../../models/survey-subject.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminComponent implements OnInit, OnDestroy {
  private readonly destroy$ = new Subject<void>();
  private readonly refreshPersonsAction$ = new BehaviorSubject<boolean>(true);
  private readonly refreshSurveysAction$ = new BehaviorSubject<boolean>(true);
  private readonly refreshSurveySubjectsAction$ = new BehaviorSubject<boolean>(true);
  private readonly deletePersonAction$ = new Subject<number>();
  private readonly deleteSurveyAction$ = new Subject<number>();
  private readonly deleteSurveySubjectAction$ = new Subject<number>();
  private readonly saveSurveySubjectAction$ = new Subject<SurveySubject>();
  loading$ = new BehaviorSubject<boolean>(false);
  persons$: Observable<Person[]>;
  surveys$: Observable<Survey[]>;
  surveySubjects$: Observable<SurveySubject[]>;
  title = 'Admin pagina';
  value: string;

  constructor(
    private readonly personHttpService: PersonHttpService,
    private readonly messageService: MessageService,
    private readonly surveyHttpService: SurveyHttpService,
    private readonly surveySubjectHttpService: SurveySubjectHttpService,
    private readonly confirmationService: ConfirmationService,
  ) {
    this.persons$ = this.refreshPersonsAction$.pipe(
      tap(() => this.loading$.next(true)),
      switchMap(() =>
        this.personHttpService.findAll().pipe(
          catchError(() => {
            this.handleError();
            return EMPTY;
          }),
        ),
      ),
      tap(() => this.loading$.next(false)),
    );
    this.surveys$ = this.refreshSurveysAction$.pipe(
      tap(() => this.loading$.next(true)),
      switchMap(() =>
        this.surveyHttpService.findAll().pipe(
          catchError(() => {
            this.handleError();
            return EMPTY;
          }),
        ),
      ),
      tap(() => this.loading$.next(false)),
    );
    this.surveySubjects$ = this.refreshSurveySubjectsAction$.pipe(
      tap(() => this.loading$.next(true)),
      switchMap(() =>
        this.surveySubjectHttpService.findAll().pipe(
          catchError(() => {
            this.handleError();
            return EMPTY;
          }),
        ),
      ),
      tap(() => this.loading$.next(false)),
    );
    this.saveSurveySubjectAction$
      .pipe(
        takeUntil(this.destroy$),
        tap(() => this.loading$.next(true)),
        switchMap((surveySubject: SurveySubject) =>
          this.surveySubjectHttpService.save(surveySubject).pipe(
            catchError(() => {
              this.handleError();
              return EMPTY;
            }),
          ),
        ),
        tap(() => {
          this.loading$.next(false);
          this.onRefreshSurveySubjectsRequested();
        }),
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngOnInit(): void {
    this.deletePersonAction$
      .pipe(
        takeUntil(this.destroy$),
        tap(() => this.loading$.next(true)),
        switchMap((id: number) =>
          this.personHttpService.deleteById(id).pipe(
            catchError(() => {
              this.handleError();
              return EMPTY;
            }),
          ),
        ),
        tap(() => {
          this.loading$.next(false);
          this.onRefreshPersonsRequested();
        }),
      )
      .subscribe();
    this.deleteSurveyAction$
      .pipe(
        takeUntil(this.destroy$),
        tap(() => this.loading$.next(true)),
        switchMap((id: number) =>
          this.surveyHttpService.deleteById(id).pipe(
            catchError(() => {
              this.handleError();
              return EMPTY;
            }),
          ),
        ),
        tap(() => {
          this.loading$.next(false);
          this.onRefreshSurveysRequested();
          this.onRefreshPersonsRequested();
        }),
      )
      .subscribe();
    this.deleteSurveySubjectAction$
      .pipe(
        takeUntil(this.destroy$),
        tap(() => this.loading$.next(true)),
        switchMap((id: number) =>
          this.surveySubjectHttpService.deleteById(id).pipe(
            catchError(() => {
              this.handleError();
              return EMPTY;
            }),
          ),
        ),
        tap(() => {
          this.loading$.next(false);
          this.onRefreshSurveySubjectsRequested();
        }),
      )
      .subscribe();
  }

  onRefreshPersonsRequested($event: void): void {
    this.refreshPersonsAction$.next(true);
  }

  onRefreshSurveysRequested($event: void): void {
    this.refreshSurveysAction$.next(true);
  }

  onRefreshSurveySubjectsRequested($event: void): void {
    this.refreshSurveySubjectsAction$.next(true);
  }

  onDeletePersonRequested(person: Person): void {
    this.deletePersonAction$.next(person.id);
  }

  onDeleteSurveyRequested(survey: Survey): void {
    this.deleteSurveyAction$.next(survey.id);
  }

  onDeleteSurveySubjectRequested(surveySubject: SurveySubject): void {
    this.deleteSurveySubjectAction$.next(surveySubject.id);
  }

  onSaveSurveySubjectRequested(): void {
    this.confirmationService.confirm({
      accept: () => {
        this.saveSurveySubjectAction$.next({ name: this.value });
      },
    });
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
