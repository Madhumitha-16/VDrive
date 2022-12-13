
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent {
  loginUserForm : FormGroup=new FormGroup({
    email:new FormControl(null,[Validators.email,Validators.required]),
    password:new FormControl(null, Validators.required)
  })

  loginUser(){
    if(!this.loginUserForm.valid){
      console.log('Invalid');return;
    }
    console.log(JSON.stringify(this.loginUserForm.value));
  }

  }

