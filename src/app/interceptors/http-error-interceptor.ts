import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SpinnerService } from "../services/spinner.service";
import { tap } from "rxjs/operators";


@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor{

  constructor(private SpinnerService: SpinnerService){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

   this.SpinnerService.requestStarted();
    return this.handler(next, req);
  }
  handler(next: HttpHandler, request: HttpRequest<any>){
    return next.handle(request)
    .pipe(
      tap(
        (event: any) => {
          if(event instanceof HttpResponse){
            this.SpinnerService.requestEnded();
          }
        },
        (error : HttpErrorResponse) => {
          this.SpinnerService.requestReset();
          throw error;}
      )
    )
  }

}
