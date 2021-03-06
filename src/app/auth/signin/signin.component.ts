import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  SignInForm: FormGroup;
  errorMessage: string;




  constructor(private formBuilder: FormBuilder, private authService : AuthService, private router: Router) { }

  ngOnInit() {
    this.initForm();

  }
  initForm(){
    this.SignInForm= this.formBuilder.group({
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
    });
  }
onSubmit(){
  const email= this.SignInForm.get('email').value;
  const password= this.SignInForm.get('password').value;

  this.authService.SignInUser(email, password).then(
    ()=>{
  this.router.navigate(['/books'])
    },

(error)=>{
  this.errorMessage= error;
  console.log(this.errorMessage)

}
  )
}
}
