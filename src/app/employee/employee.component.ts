import { Component, OnInit, ViewChild } from '@angular/core';
import { LeaveService } from '../leave.service.ts.service';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  @ViewChild('fname') applyForm: NgForm;
  leaveDetails: any = [];
  id: string = '';
  EmployeeName = '';
  StartDate = '';
  EndDate = '';
  status = 'Pending';
  // currentdate: any = new Date();
  constructor(private _leaveservice: LeaveService) {

  }

  ngOnInit(): void {
    // this.leaveDetails= this._leaveservice.currentLeaveStatus$.getValue();
    // console.log(this.leaveDetails);
    this._leaveservice.currentLeaveStatus$.subscribe(details => {
      this.leaveDetails = details
    })
    console.log(this.leaveDetails);
  }
  onApplyLeave() {
    // if (this.StartDate > this.currentdate) {
    //   console.log(this.currentdate)
    // }
      if (this.StartDate > this.EndDate) {
        alert("Please Enter a valid date");

        this.applyForm.reset();
      } else {
        this.leaveDetails.push({
          id: this.leaveDetails.length + 1,
          name: this.EmployeeName,
          startdate: this.StartDate,
          enddate: this.EndDate,
          status: this.status 
        });
        this._leaveservice.onSendleave(this.leaveDetails);
        this.applyForm.reset();
        // this._employeeservice.leavedetail.next(this.leaveDetails);
      }
    
  }
}
