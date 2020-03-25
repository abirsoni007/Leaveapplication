import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { HeaderComponent } from './header/header.component';
import { MangerComponent } from './manger/manger.component';
import { LeaveService } from './leave.service.ts.service';

import { SingupComponent } from './singup/singup.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './authentication.service';
import { AlertComponent } from './alert/alert.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    HeaderComponent,
    MangerComponent,
    SingupComponent,
    LoginComponent,
    AlertComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [LeaveService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
