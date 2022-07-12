import {ChangeDetectionStrategy, Component, OnDestroy} from '@angular/core';
import {Person} from '@angular/cli/utilities/package-json';
import {PersonHttpService} from '../services/person-http.service';
import {Subject, takeUntil} from 'rxjs';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SurveyComponent implements OnDestroy {
  private readonly destroy$ = new Subject<void>();

  title = 'Paul\'s steak tasting';
  person: Person | undefined;

  constructor(private readonly personHttpService: PersonHttpService) {
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onSavePersonRequested(person: Person) {
    console.log(`onSavePersonRequested: ${JSON.stringify(person)}`);
    this.personHttpService.save(person).pipe(takeUntil(this.destroy$)).subscribe(p => this.person = p);
  }
}
