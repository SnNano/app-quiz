import { Routes } from "@angular/router";
import { AuthGuard } from "./authentification/auth/auth.guard";
import { QuizComponent } from "./front/quiz/quiz.component";
import { RegisterComponent } from "./authentification/register/register.component";
import { ResultComponent } from "./front/result/result.component";
import { QuizChoiceComponent } from "./front/quiz-choice/quiz-choice.component";
import { NotFoundComponent } from "./front/not-found/not-found.component";

export const appRoute :Routes = [
  { path: 'login', component: RegisterComponent},
  { path: 'quiz', component: QuizChoiceComponent, canActivate:[AuthGuard]},
  { path: 'quiz/:id', component: QuizComponent, canActivate: [AuthGuard]},
  { path: 'result', component: ResultComponent, canActivate: [AuthGuard]},
  { path:'', redirectTo:'/login', pathMatch:'full'},
  { path: '**', component: NotFoundComponent}
];
