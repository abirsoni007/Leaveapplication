import { Component, OnInit, ViewChild } from '@angular/core';
import { LeaveService } from '../leave.service.ts.service';
import { NgForm, NgModel } from '@angular/forms';



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
  StartDate: number;
  EndDate: number;
  status = 'Pending';
  constructor(private _leaveservice: LeaveService) {

  }

  ngOnInit(): void {
    this._leaveservice.currentLeaveStatus$.subscribe(details => {
      this.leaveDetails = details
    })
    console.log(this.leaveDetails);
  }
  onApplyLeave() {
   
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
      
    }

  }
}



