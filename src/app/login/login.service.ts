import { HttpClient } from '@angular/common/http';
import { Injectable, Optional } from '@angular/core';
import { User } from '../Model/User.model';


@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private http:HttpClient) { }
  user:User=new User()
  url:any="http://hmaapi.kilobytetech.com/auth/login"
  validateLogin(emailID:String,password:String)
  {
    this.user.email=emailID
    this.user.password=password
    return this.http.post<any>(this.url, this.user, {headers:
      {
        "Accept":"application/json, text/plain, */*",
        "Authorization":"",
        "Origin":"http://hma.kilobytetech.com",
        "Referer":"http://hma.kilobytetech.com/",
        "Accept-Language":"en-GB,en;q=0.9",
        "ohh":"working"
        

  }})
  }
}
