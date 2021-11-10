import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule }  from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { QuizComponent } from './front/quiz/quiz.component';
import { RegisterComponent } from './authentification/register/register.component';
import { NavbarComponent } from './front/layouts/navbar/navbar.component';
import { ResultComponent } from './front/result/result.component';
import { RouterModule } from '@angular/router';
import { appRoute } from './routes';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './authentification/auth/auth.guard';
import { QuizChoiceComponent } from './front/quiz-choice/quiz-choice.component';
import { HeaderComponent } from './front/layouts/header/header.component';
import { FooterComponent } from './front/layouts/footer/footer.component';
import { NotFoundComponent } from './front/not-found/not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    RegisterComponent,
    NavbarComponent,
    ResultComponent,
    QuizChoiceComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(appRoute),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
