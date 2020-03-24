import { Component, OnInit } from '@angular/core';
import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
UserDetails=[];
Password='';
Email='';
  constructor(private router: Router) { }

  ngOnInit(): void {
  this.UserDetails= JSON.parse(localStorage.getItem('currentuser'))
  console.log(this.UserDetails)
  }
  onLogIn(){
   this.UserDetails.forEach(user => {
    email:atob(user.email)
    password: atob(user.password) 
    if(this.Email===atob(user.email)){
        if(this.Password===atob(user.password)){
          this.router.navigate(['empolyee'])
        }else{
          alert('Password is incorrect')
        }
    }else{
    alert('Email is incorrect')
    }
   });
   
  }
}
