import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { MangerComponent } from './manger/manger.component';
import { SingupComponent } from './singup/singup.component';
import { LoginComponent } from './login/login.component';




const routes: Routes = [{ path: '', redirectTo: 'signup', pathMatch: 'full' },
                        { path: 'empolyee', component: EmployeeComponent },
                        { path: 'manger', component: MangerComponent },
                        { path: 'signup', component: SingupComponent },   
                        { path: 'login', component:LoginComponent}       ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
