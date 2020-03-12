import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { MangerComponent } from './manger/manger.component';


const routes: Routes = [{path: '', redirectTo: 'employee', pathMatch:'full'},
                        { path: 'employee', component: EmployeeComponent},
                        { path: 'manger', component: MangerComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
   