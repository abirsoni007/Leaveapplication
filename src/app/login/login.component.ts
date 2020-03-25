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
  constructor(private router: Router, private auth: AuthenticationService) { }

  ngOnInit(): void {
    this.UserDetails = JSON.parse(localStorage.getItem('currentuser'))
    console.log(this.UserDetails)
  }
  onLogIn() {
    this.UserDetails.forEach(user => {
      email: atob(user.email)
      password: atob(user.password)
      if (this.Email === atob(user.email)) {
        if (this.Password === atob(user.password)) {
          this.router.navigate(['empolyee'])
          this.isAuth = true;
          this.auth.onAuthentication(this.isAuth)
        } else {
          alert('Password is incorrect')


        }
      } else {
        alert('Email is incorrect')
      }
    });

  }

}
