import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { NgModel } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public loginService:LoginService ,private router:Router) { }
  email:any
  password:any;
  loggedIn:boolean=false;
  userData:any
  emailpasstrue:any="false"
  ngOnInit() {
   
  }
  // prakhar@kilobytetech.com
  // 123456
  validateLogin()
  {
    
    this.loginService.validateLogin(this.email,this.password).subscribe( 
      (res)=>{
         
        this.loggedIn=true;
        localStorage.setItem("AuthToken",res.token)
        //local Storage should be clear after logout.
        console.log(localStorage.getItem("AuthToken"))
        console.log(res)
        this.router.navigate(['/home/clients'])
        this.emailpasstrue=""
      },
      (err)=>{
        console.log("Invalid Credential")
        this.emailpasstrue="Invalid Email or password";
        this.loggedIn=false;
      })
  }
}

