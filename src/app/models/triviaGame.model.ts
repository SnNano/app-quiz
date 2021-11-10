import {Subject} from 'rxjs';

export class TriviaGame {

  currentLife = 3;
  correctAnswerCount = 0;
  readonly gameOver$ = new Subject();
  readonly questions$ = new Subject<TriviaQuestion>();
  readonly life$ = new Subject<number>();

  private readonly questionsIterator: IterableIterator<TriviaQuestion>;
  currentQuestion: TriviaQuestion;

  constructor(private questions: TriviaQuestion[]) {

    this.questionsIterator = questions[Symbol.iterator]();
    this.currentQuestion = this.questionsIterator.next().value;
  }

  submitAnswer(answer: string) {

    if (answer === this.currentQuestion.correct_answer) {

      this.correctAnswerCount++;
    }


    if (this.currentLife === 0) {

      this.gameOver$.next();
    }
    else {

      this.currentQuestion = this.questionsIterator.next().value;
      this.questions$.next(this.currentQuestion);
    }

  }

}
