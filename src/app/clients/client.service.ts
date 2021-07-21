import { Injectable, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }
  token:any=null
  fetchAllclient()
  {
    
    this.token=localStorage.getItem("AuthToken")
    console.log(this.token)
    return this.http.get<Optional>("http://hmaapi.kilobytetech.com/users?pageNo=1&size=20",{headers:{"Authorization":this.token}});
  }
}
