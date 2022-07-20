import { TestBed } from '@angular/core/testing';

import { SurveySubjectHttpService } from './survey-subject-http.service';

describe('SurveySubjectHttpService', () => {
  let service: SurveySubjectHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SurveySubjectHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
