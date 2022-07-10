import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SurveyComponent implements OnInit {
  title = "Paul's steak tasting";

  constructor() {
  }

  ngOnInit(): void {
  }

}
