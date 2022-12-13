import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookingService } from 'src/app/booking.service';
@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
  panelOpenState = false;

  bookingForm : FormGroup=new FormGroup({
    firstName:new FormControl(null,Validators.required),
    lastName:new FormControl(null,Validators.required),
    mobileNo:new FormControl(null,Validators.required),
    typeOfRide:new FormControl(null,Validators.required),
    time: new FormControl(null,Validators.required),
    date:new FormControl(null,Validators.required),
    pickUp:new FormControl(null,Validators.required),
    destiny:new FormControl(null, Validators.required)
  })

  constructor(private _router:Router, private _bookingService:BookingService) { }
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  confirmBooking(){
    this._bookingService.confirmBooking(JSON.stringify(this.bookingForm.value))
    .subscribe(
      data=> {console.log(data); alert("Submitted Successfully! "); this._router.navigate(['/user-profile']);},
      error=>console.error(error)

    )}

}
 /*this._user.loginUser(JSON.stringify(this.loginUserForm.value))
    .subscribe(
      data=>{console.log(data);this._router.navigate(['/user-profile']);} ,
      error=>console.error(error)*/
    //console.log(JSON.stringify(this.bookingForm.value));
    //this._router.navigate(['/user-profile']);
