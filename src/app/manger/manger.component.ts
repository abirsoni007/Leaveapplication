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
  leaveDetails:string[];
  s:string
  leaveStatus//=[this.leaveDetails[this.s]];
  
  
  constructor(private _leaveservice : LeaveService){

  }
  
  ngOnInit(): void {
    this.leaveDetails =  this._leaveservice.currentLeave$.getValue();
    // this._leaveservice.employee$.subscribe(details =>{
    //   debugger
    //   this.leaveDetail=details})
    console.log(this.leaveDetails);
    
  }

  onleaveStatus(data){
    this.s=data;
   
    this.leaveStatus.push({status:this.s})
    console.log(this.leaveStatus)

    this._leaveservice.onLeaveStatus(this.leaveDetails);
  
  }
}
