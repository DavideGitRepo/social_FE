import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  loginForm!:FormGroup
  isSubmitted:boolean = false;
  constructor(private authService:AuthService){

  }
  ngOnInit(): void {
      this.loginForm = new FormGroup({
        username: new FormControl('', { validators:[Validators.required],  updateOn:'change'}),
        password: new FormControl('', { validators:[Validators.required,Validators.minLength(4)], updateOn:'change'})
      });
  }

  onLogin(){
    this.isSubmitted = true;
    if(this.loginForm.valid){

    }
  }

}
