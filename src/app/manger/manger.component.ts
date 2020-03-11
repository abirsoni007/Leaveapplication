import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee/employee.service';
import { LeaveService } from '../leave.service.ts.service';
import { Data } from '@angular/router';


@Component({
  selector: 'app-manger',
  templateUrl: './manger.component.html',
  styleUrls: ['./manger.component.css']
})
export class MangerComponent implements OnInit {
  leaveDetail:string[]=[];
 
  
  // constructor(public _employeeservice: EmployeeService) {

  //  }
  constructor(private _leaveservice : LeaveService){

  }
  ngOnInit(): void {
   
    
    this.leaveDetail =  this._leaveservice.currentNameSubject$.getValue();
    // this._leaveservice.employee$.subscribe(details =>{
    //   debugger
    //   this.leaveDetail=details})
    console.log(this.leaveDetail);
    // this.leaveDetail.push(this._leaveservice.currentNameSubject$.getValue());
    // this._employeeservice.leavedetail.pipe().subscribe(Response=>{
    //   this.leaveDetail=Response;
    //   console.log(this.leaveDetail)
    // })

  }

}
