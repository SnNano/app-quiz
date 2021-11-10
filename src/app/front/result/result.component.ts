import { Component, OnInit } from '@angular/core';
import { TriviaDBService } from 'src/app/services/trivia-db.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  result: number;
  constructor( private TriviaService : TriviaDBService) { }

  ngOnInit(): void {
    this.result = this.TriviaService.result;
  }

}
