import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ParticipantsService } from 'src/app/services/participants.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  SignUpForm: FormGroup ;
  errorInfo: String;

  constructor(
    private fb : FormBuilder,
    private PartiService : ParticipantsService,
    private route: Router
    ) { }

  ngOnInit(): void {
      this.SignUpForm = this.fb.group ({
       username: ['', [
         Validators.required,
         Validators.minLength(5),
         Validators.maxLength(20),
         this.forbiddenNameValidator(/Admin/i)
       ]],
       password:['', [
         Validators.required
               ]]
     });
     if(localStorage.length>0){
      this.route.navigate(['/quiz']);
     }
     else{
      this.route.navigate(['/login']);
     }
  }
   get forms(){ return this.SignUpForm.controls; }
     forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
     return (control: AbstractControl): ValidationErrors | null => {
       const forbidden = nameRe.test(control.value);
       return forbidden ? {forbiddenName: {value: control.value}} : null;
     };
   }
   onSubmit(){
     let data = {...this.SignUpForm.value}
     this.PartiService.login().subscribe(
      (res:any) => { res.map((res2:any) => {
        if(data.username==res2.login.username && data.password==res2.login.password){
          localStorage.clear();
          localStorage.setItem('Participants', JSON.stringify(res));
          window.location.reload();
        }
        else{
          this.errorInfo ="This user does not exist"
        }
      })
      },
      (error) => { console.log(error)}
     )
   }

}
