import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ParticipantsService  {

  apiUser = 'https://randomuser.me/api/?inc=login&seed=blabla';
  constructor(
   private http : HttpClient
    ) {
  }

  login(){
     return this.http.get(this.apiUser) .pipe(
      map((res:any) => res.results.map(((res2:any )=>{
        return res2;
      }))),
      catchError(this.handleError)
     );
}
private handleError(error: any): Promise<any> {
  console.error('An error occurred', error);
  return Promise.reject(error.message || error);
}
}
