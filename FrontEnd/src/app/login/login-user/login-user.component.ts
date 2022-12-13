
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';
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

  constructor(private _router:Router, private _userService:UserService) { }

  loginUser(){
    if(!this.loginUserForm.valid){
      console.log('Invalid');return;
    }
    this._userService.loginUser(JSON.stringify(this.loginUserForm.value))
    .subscribe(
        (data:any) =>{console.log(data);
        if(data.success == true){
          this._router.navigate(['/user-profile']);
        }
        else{
          alert(data.message);
        }
        //this._router.navigate(['/user-profile']);
      } ,
      error=>console.error(error));
    // console.log(JSON.stringify(this.loginUserForm.value));
    // this._router.navigate(['/user-profile']);

    }


  }

