import { Component, OnInit, Output ,EventEmitter} from '@angular/core';
import { LeaveService } from '../leave.service.ts.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  
  leaveDetails:any=[];
  id:string;
  EmployeeName = '';
  StartDate = '';
  EndDate ='';
  status='Pending';
  
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
      id:this.leaveDetails.length+1,
      name: this.EmployeeName,
      startdate: this.StartDate,
      enddate: this.EndDate,
      status:this.status
      
      
    });
    
   
    this._leaveservice.onSendleave(this.leaveDetails);
    // this._employeeservice.leavedetail.next(this.leaveDetails);
   
   
  }
  
}
