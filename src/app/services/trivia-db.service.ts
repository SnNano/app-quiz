import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Quiz } from '../models/quiz';
import { TriviaGame } from '../models/triviaGame.model';

@Injectable({
  providedIn: 'root'
})
export class TriviaDBService {

  TRIVIA_URL = `${environment.TRIVIA_URL}`;
  CATEGORY_URL = `${environment.CATEGORY_URL}`;
  resQst: Quiz[];
  result: number;
  currentGame: TriviaGame;
  readonly PARAM_CATEGORY = 'category';

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) { }

  startNewGame(categoryId: number) {

    this.getQuestions(categoryId).subscribe((res) => {

      this.currentGame = new TriviaGame(res);
      this.router.navigate(['/quiz/'+categoryId], {relativeTo: this.route});

      //this.currentGame.gameOver$.subscribe(() => this.router.navigate(['/game-over'], {relativeTo: this.route}));
    });
  }



  getCategories(): Observable<TriviaCategory[]> {

    return this.http.get(this.CATEGORY_URL).
    pipe(map((res: any) => res.trivia_categories));
  }

  getQuestions(categoryId : number) : Observable<TriviaQuestion[]>
  {
    let params = new HttpParams();
    if (categoryId !== undefined) {
      params = params.append(this.PARAM_CATEGORY, categoryId.toString());
    }
    return this.http.get(this.TRIVIA_URL, {
      params: params
    }).pipe(map((res :any) => {
      const outResults = res.results.map((item: any) => {

        return <TriviaQuestion>{
          category: atob(item.category),
          correct_answer: atob(item.correct_answer),
          incorrect_answers: item.incorrect_answers.map((ans:any) => atob(ans)),
          question: atob(item.question),
          difficulty: atob(item.difficulty),
          type: atob(item.type)
        };
      });
      return outResults;
    }))
  }
}
