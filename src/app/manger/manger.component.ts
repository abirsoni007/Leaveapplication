import { Component, OnInit } from '@angular/core';
import { LeaveService } from '../leave.service.ts.service';




@Component({
  selector: 'app-manger',
  templateUrl: './manger.component.html',
  styleUrls: ['./manger.component.css']
})
export class MangerComponent implements OnInit {
  
  leaveDetails:string[];
  s:string;
  d:string;
  update:any[];
  // leaveStatus//=[this.leaveDetails[this.s]];
  
  
  constructor(private _leaveservice : LeaveService){

  }

  
  ngOnInit(): void {
    this.leaveDetails =  this._leaveservice.currentLeave$.getValue();
    // this._leaveservice.currentLeave$.subscribe(details =>{
    //   this.leaveDetails=details})
    // console.log(this.leaveDetails);
    
    
  }

  onleaveStatus(uid:string, data:string){
    
    this.d=data
    // let newdata = this._leaveservice.currentLeave$.value.findIndex((item: any)=> { item.id === uid });
    // console.log(newdata)

    this.leaveDetails.forEach((element:any) => {
      if(element.id===uid)
      {
        element.status=data;
        console.log(element.status)
      }
      console.log(typeof element)
      
    });
  this._leaveservice.onLeaveStatus(this.leaveDetails);
    console.log(this.leaveDetails); 
  }
  
}
