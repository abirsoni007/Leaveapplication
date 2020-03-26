import { Component, OnInit } from '@angular/core';
import { LeaveService } from '../leave.service.ts.service';

@Component({
  selector: 'app-manger',
  templateUrl: './manger.component.html',
  styleUrls: ['./manger.component.css']
})
export class MangerComponent implements OnInit {

  leaveDetails: string[];

  constructor(private _leaveservice: LeaveService) {
  }

  ngOnInit(): void {
    this.leaveDetails = this._leaveservice.currentLeave$.getValue();
    // this._leaveservice.currentLeave$.subscribe(details =>{
    //   this.leaveDetails=details})
    // console.log(this.leaveDetails);
  }
  onleaveStatus(uid: string, data: string) {

    this.leaveDetails.forEach((element: any) => {
      if (element.id === uid) {
        element.status = data;
      }
    });
    this._leaveservice.onLeaveStatus(this.leaveDetails);
  }
}
