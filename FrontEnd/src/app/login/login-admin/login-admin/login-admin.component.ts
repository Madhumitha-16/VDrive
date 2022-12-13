import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin.service';
@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {
  loginAdminForm : FormGroup=new FormGroup({
    email:new FormControl(null,[Validators.email,Validators.required]),
    password:new FormControl(null, Validators.required)
  })

  constructor(private _router:Router, private _adminService:AdminService) { }
  loginAdmin(){
    if(!this.loginAdminForm.valid){
      console.log('Invalid');return;
    }else{
    console.log(JSON.stringify(this.loginAdminForm.value));
    this._router.navigate(['/admin-profile']);
    }
    // this._adminService.loginAdmin(JSON.stringify(this.loginAdminForm.value))
    // .subscribe(
    //     (data:any) =>{console.log(data);
    //     if(data.success == true){
    //       this._router.navigate(['/driver-profile']);
    //     }
    //     else{
    //       alert(data.message);
    //     }
    //   } ,
    //   error=>console.error(error));
  }
  ngOnInit(): void {
  }

}
