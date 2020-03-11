import { Component, OnInit, Output ,EventEmitter} from '@angular/core';
import {EmployeeService} from '../employee/employee.service'
import { LeaveService } from '../leave.service.ts.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  
  ngOnInit(): void {
   
  }
  @Output() public leavedetail = new EventEmitter();
  public leaveDetails=[];
  employeeName = '';
  StartDate = '';
  EndDate ='';

//  
constructor(private _leaveservice : LeaveService){
    
}

  onApplyLeave(){
    this.leaveDetails.push({
      name: this.employeeName,
      startdate: this.StartDate,
      enddate: this.EndDate
      
    });
    this._leaveservice.onSendleave(this.leaveDetails);
    // this._employeeservice.leavedetail.next(this.leaveDetails);
  }
}
