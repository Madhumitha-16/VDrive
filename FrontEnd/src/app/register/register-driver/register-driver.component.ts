import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { DriverService } from 'src/app/driver.service';

@Component({
  templateUrl: 'register-driver.component.html' ,
  styleUrls:['register-driver.component.css']})

export class RegisterDriverComponent {
  registerDriverForm:FormGroup = new FormGroup({
    email:new FormControl(null,[Validators.email,Validators.required]),
    username:new FormControl(null,Validators.required),
    license:new FormControl(null,Validators.required),
    address:new FormControl(null,Validators.required),
    password:new FormControl(null,Validators.required),
    cpass:new FormControl(null,Validators.required),
    exp:new FormControl(null,Validators.required),
    workedAt:new FormControl(null,Validators.required)
  })
  constructor(private _router:Router,private _driverService:DriverService){}



  ngOnInit(){

  }

registerDriver(){
    if(!this.registerDriverForm.valid || (this.registerDriverForm.controls.password.value != this.registerDriverForm.controls.cpass.value)){
      console.log('Invalid form');
      return;
    }
    this._driverService.registerDriver(JSON.stringify(this.registerDriverForm.value))
    .subscribe(
      data=> {console.log(data); this._router.navigate(['/login-driver']);},
      error=>console.error(error)
    //console.log(JSON.stringify(this.registerDriverForm.value));
    //this._router.navigate(['/login-driver']);
    )}

}



