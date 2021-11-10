import { TestBed } from '@angular/core/testing';

import { TriviaDBService } from './trivia-db.service';

describe('TriviaDBService', () => {
  let service: TriviaDBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TriviaDBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
