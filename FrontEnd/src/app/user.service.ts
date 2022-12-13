import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http:HttpClient) { }

  registerUser(body:any){
    return this._http.post('http://localhost:3000/users/registerUser',body,{
      observe:'body',
      headers:new HttpHeaders().append('Content-Type','application/json'),

    });
  }

  loginUser(body:any){
    return this._http.post('http://localhost:3000/users/loginUser',body,{
      observe:'body',
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
  }

  confirmBooking(body:any){
    return this._http.post('http://localhost:3000/users/confirmBooking',body,{
      observe:'body',
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
  }

  getUserProfile(){
    return this._http.get('http://localhost:3000/users/getUserProfile')
  }
}
