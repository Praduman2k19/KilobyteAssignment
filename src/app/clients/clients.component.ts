import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from './client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  constructor(private clientService:ClientService,private router:Router) { 
   
  }
  allClient:any=""
 
  ngOnInit(): void {
    this.getAllClient();
  }
  getAllClient()
  {
    this.clientService.fetchAllclient().subscribe((res)=>{
      this.allClient=res;
      console.log(res);

     
    },(err)=>{
      this.router.navigate(['/']);
    })
  }
  getDocument(clientId:String) {
    console.log(clientId)
    this.router.navigate(['/home/clientsdocuments'], { queryParams: { clientid: clientId } });
  }
}
