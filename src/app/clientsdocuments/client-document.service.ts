import { HttpClient,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientDocumentService {

  constructor(private http: HttpClient) { }
 token:any=null
 clintobj:any;
  getdocument(clientid:any,companyname:any)
  {
    let paramsobj = new HttpParams();
    
    paramsobj = paramsobj.append('clientId', clientid)
    // this.clintobj= paramsobj.append('companyName', companyname)
    // console.log(this.clintobj);
    paramsobj=paramsobj.append('financ ialYear',"2020-2021")
    this.token=localStorage.getItem("AuthToken")
    
    return this.http.get("http://hmaapi.kilobytetech.com/documents",{params:paramsobj,headers:{"Authorization":this.token}});
  }
}
