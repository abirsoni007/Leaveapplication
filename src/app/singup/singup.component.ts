import { Component, OnInit, ViewChild } from '@angular/core';
import { EmailValidator, NgForm } from '@angular/forms';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {
@ViewChild('sfname') signup: NgForm
UseDetails=[];
Employeename:string='';
Email:string;
Password:any;
  constructor() { }

  ngOnInit(): void {
  }

  onSignup(){
    this.UseDetails.push({
      name: btoa(this.Employeename),
      email: btoa(this.Email),
      password: btoa(this.Password) 
    });
    console.log(this.UseDetails)
    localStorage.setItem('currentuser', JSON.stringify(this.UseDetails));
    this.signup.reset();
  }
}
