import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']

})
export class UserProfileComponent implements OnInit {
  name : string | undefined;

  constructor(private _userService:UserService) { }

  ngOnInit(): void{
      this._userService.getUserProfile().subscribe((data:any) =>{
      console.log(data);
    } ,
    error=>console.error(error));
  }

}
