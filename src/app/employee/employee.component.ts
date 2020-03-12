import { Component, OnInit, Output ,EventEmitter} from '@angular/core';

import { LeaveService } from '../leave.service.ts.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  
  leaveDetails=[];
  employeeName = '';
  StartDate = '';
  EndDate ='';
  levstatus='';
  constructor(private _leaveservice : LeaveService){
    
  }
  ngOnInit(): void {
    // this.leaveDetails= this._leaveservice.currentLeaveStatus$.getValue();
    // console.log(this.leaveDetails);
    this._leaveservice.currentLeaveStatus$.subscribe(details =>{
   
      this.leaveDetails=details})
   
    console.log(this.leaveDetails);
  }
  


  onApplyLeave(){
    this.leaveDetails.push({
      name: this.employeeName,
      startdate: this.StartDate,
      enddate: this.EndDate,
      status: this.levstatus
      
    }); 
    this._leaveservice.onSendleave(this.leaveDetails);
    // this._employeeservice.leavedetail.next(this.leaveDetails);
  }
  ngOnDestroy() {
   
    

  }
}
