import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-driver-ride',
  templateUrl: './driver-ride.component.html',
  styleUrls: ['./driver-ride.component.css']
})
export class DriverRideComponent implements OnInit {
  msg : string | undefined;
  driverRideDetails : any;
  acceptedRideDetails:any;

  // driverRideDetails : Array<any>;

  constructor(private _http:HttpClient, private _router:Router) { }


  fetchDriverDetails(){
      this._http.get('http://localhost:3000/bookings/pending/').subscribe(
        msg => {
          console.log(msg);
          this.driverRideDetails = msg;
        },
        error=>console.error("Print Error",error)
      );

  }

//   acceptedDetails(){
//     this._http.get('http://localhost:3000/bookings/accepted/').subscribe(
//       data => {
//         console.log(data);
//         this.acceptedRideDetails = data;
//       },
//       error=>console.error("Print Error",error)
//     );

// }

  bookingAccepted(rideId:string){


    this._http.put('http://localhost:3000/bookings/booking/'+rideId, {status:"Accepted"}).subscribe()
    //this._router.navigate(['/driver-rides']);

    this.ngOnInit();

  }


  ngOnInit(): void {

    this.fetchDriverDetails();
    // .subscribe(
    //   data=> {console.log(data); this._router.navigate(['/login-driver']);},
    //   error=>console.error(error)
    //console.log(JSON.stringify(this.registerDriverForm.value));
    //this._router.navigate(['/login-driver']);
    //)}
  }

}
