import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizChoice } from 'src/app/models/quizChoice';
import { TriviaDBService } from 'src/app/services/trivia-db.service';

@Component({
  selector: 'app-quiz-choice',
  templateUrl: './quiz-choice.component.html',
  styleUrls: ['./quiz-choice.component.scss']
})
export class QuizChoiceComponent implements OnInit {

  quizChoice : QuizChoice[];
  selectedCategoryId : number;
  constructor(
    private TriviaService : TriviaDBService,
    private router : Router
  ) { }

  ngOnInit(): void {
    setTimeout(()=>{
      this.getAllChoices();
  }, 2000);

  }
  getAllChoices()
  {
    this.TriviaService.getCategories()
    .subscribe( (res:any) =>{
      this.quizChoice = res;
      this.selectedCategoryId = this.quizChoice[0].id;
   });
  }
  onStart(catId: number) {
    this.TriviaService.startNewGame(catId);
  }
}
