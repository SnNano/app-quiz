import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ParticipantsService  {

  apiUser = 'https://randomuser.me/api/?inc=login&seed=blabla';
  constructor(
   private http : HttpClient,
   private route: Router
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
