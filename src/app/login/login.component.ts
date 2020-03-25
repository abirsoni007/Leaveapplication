import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  UserDetails = [];
  Password = '';
  Email = '';
  isAuth = false;
  erroroccarance= false;
  error;
  
  constructor(private router: Router, private auth: AuthenticationService) { }

  ngOnInit(): void {
    this.UserDetails = JSON.parse(localStorage.getItem('currentuser'))
    console.log(this.UserDetails)
  }
  onLogIn() {
    this.UserDetails.forEach(user => {
      
      if (this.Email === atob(user.email)) {
        if (this.Password === atob(user.password)) {
          this.router.navigate(['empolyee'])
          this.isAuth = true;
          this.auth.onAuthentication(this.isAuth)
        } else {
          this.erroroccarance= true;
          this.error='password is incorrect';


        }
      } else {
        this.error='Email is incorrect'
        this.erroroccarance= true;
      }
    });
  }
  onDone(){
    this.erroroccarance=false;
    console.log('login')
  }

}
