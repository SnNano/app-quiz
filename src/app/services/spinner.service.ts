import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  private count = 0;
  private spinner = new BehaviorSubject<String>('');
  constructor() { }
  getSpinnerOberver() : Observable<String>{
    return this.spinner.asObservable();
  }
  requestStarted(){
    if(++this.count ===0){
      this.spinner.next('start');
    }
  }
  requestEnded(){
    if(this.count===0 || --this.count===0){
      this.spinner.next('stop');
    }
  }
  requestReset(){
    this.count=0;
    this.spinner.next('stop');
  }
}
