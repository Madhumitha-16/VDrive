
import { Component } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DriverService } from 'src/app/driver.service';

@Component({
  selector: 'app-login-driver',
  templateUrl: './login-driver.component.html',
  styleUrls: ['./login-driver.component.css']
})
export class LoginDriverComponent {
  loginDriverForm : FormGroup=new FormGroup({
    email:new FormControl(null,[Validators.email,Validators.required]),
    password:new FormControl(null, Validators.required)
  })

  constructor(private _router:Router, private _driverService:DriverService) { }

  loginDriver(){
    if(!this.loginDriverForm.valid){
      console.log('Invalid');return;
    }
    this._driverService.loginDriver(JSON.stringify(this.loginDriverForm.value))
    .subscribe(
        (data:any) =>{console.log(data);
        if(data.success == true){
          this._router.navigate(['/driver-profile']);
        }
        else{
          alert(data.message);
        }
      } ,
      error=>console.error(error));
    // console.log(JSON.stringify(this.loginDriverForm.value));
    // this._router.navigate(['/driver-profile']);
  }


}
