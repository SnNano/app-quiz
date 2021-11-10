import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TriviaDBService } from 'src/app/services/trivia-db.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  currentQuestion: TriviaQuestion;
  chosenAnswer ="";
  question : TriviaQuestion;
  count = 1;
  countAnswers = 0;
  constructor(
    private TriviaService: TriviaDBService,
    private route: Router
    ) { }

  ngOnInit(): void {

    this.question = this.TriviaService.currentGame.currentQuestion;
     if(this.question != undefined){
      this.TriviaService.currentGame.questions$.subscribe(question => this.question = question);
     }
     else{
       this.route.navigate(['/quiz']);
     }
  }
  chooseAnswer(answer : string){
    this.chosenAnswer = answer;
  }

  onSubmit() {

    if(this.chosenAnswer === this.question.correct_answer){
      this.countAnswers++;
    }
    this.TriviaService.result= this.countAnswers;
    this.TriviaService.currentGame.submitAnswer(this.chosenAnswer);
    this.count = this.count +1;
    this.chosenAnswer = '';
    if(this.count === 6){
      this.route.navigate(['/result']);
    }
  }
}
