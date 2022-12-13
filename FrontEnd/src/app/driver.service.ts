import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  constructor(private _http:HttpClient) { }

  registerDriver(body:any){
    return this._http.post('http://localhost:3000/drivers/registerDriver',body,{
      observe:'body',
      headers:new HttpHeaders().append('Content-Type','application/json'),

    });
  }

  loginDriver(body:any){
    return this._http.post('http://localhost:3000/drivers/loginDriver',body,{
      observe:'body',
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
  }
}
