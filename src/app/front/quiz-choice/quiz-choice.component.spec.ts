import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizChoiceComponent } from './quiz-choice.component';

describe('QuizChoiceComponent', () => {
  let component: QuizChoiceComponent;
  let fixture: ComponentFixture<QuizChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizChoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
