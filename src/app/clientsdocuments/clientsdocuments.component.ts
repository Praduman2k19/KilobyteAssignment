import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientDocumentService } from './client-document.service';
@Component({
  selector: 'app-clientsdocuments',
  templateUrl: './clientsdocuments.component.html',
  styleUrls: ['./clientsdocuments.component.css']
})
export class ClientsdocumentsComponent implements OnInit {

  constructor(private route: ActivatedRoute,private clientsDocumentService:ClientDocumentService,private router:Router) { }
  clientid:any
  documents:any
  ngOnInit(): void {

    this.route.queryParams
      .subscribe(params => {
        console.log(params);
        this.clientid = params.clientid;
        console.log(this.clientid); 
      }
    );
    this.getdocument()
  }
  
  getdocument()
  {
    this.clientsDocumentService.getdocument(this.clientid).subscribe((res)=>{
      this.documents=res;
      console.log(res)
    },(err)=>{
      this.router.navigate(['/']);
    })
  }
}
