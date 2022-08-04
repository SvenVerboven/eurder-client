import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveySubjectTableComponent } from './survey-subject-table.component';

describe('SurveySubjectTableComponent', () => {
  let component: SurveySubjectTableComponent;
  let fixture: ComponentFixture<SurveySubjectTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveySubjectTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveySubjectTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
