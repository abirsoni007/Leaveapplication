import { Injectable, EventEmitter, Output, } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class EmployeeService{
  @Output() public leavedetail = new EventEmitter();
  public leaveDetails: BehaviorSubject<Array<any>> = new BehaviorSubject([]);



    constructor(){

    }
    onApplyLeave(leave){
        this.leavedetail.emit(this.leaveDetails);
    }
        
          
          
        

}