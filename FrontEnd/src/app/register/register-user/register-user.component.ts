import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';



@Component({
  selector:'app-user-register',
  templateUrl: 'register-user.component.html' ,
  styleUrls:['register-user.component.css']})

export class RegisterUserComponent implements OnInit {
  registerForm:FormGroup = new FormGroup({
    email:new FormControl(null,[Validators.email,Validators.required]),
    username:new FormControl(null,Validators.required),
    password:new FormControl(null,Validators.required),
    cpass:new FormControl(null,Validators.required),
    address:new FormControl(null,Validators.required),
    city:new FormControl(null,Validators.required),
    cType:new FormControl(null,Validators.required)
  })
  constructor(private _router:Router,private _userService:UserService){}



  ngOnInit(){

  }
  moveToUserLogin(){
    this._router.navigate(['/login-user']);
  }
registerUser(){
    if(!this.registerForm.valid || (this.registerForm.controls.password.value != this.registerForm.controls.cpass.value)){
      console.log('Invalid form');
      return;
    }
    this._userService.registerUser(JSON.stringify(this.registerForm.value))
    .subscribe(
      data=> {console.log(data); this._router.navigate(['/login-user']);},
      error=>console.error(error)
    )
    /*console.log(JSON.stringify(this.registerForm.value));
    this._router.navigate(['/login-user']);*/
}

}
