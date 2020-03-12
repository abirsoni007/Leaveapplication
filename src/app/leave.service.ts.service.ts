
import { Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';


export class LeaveService {
  currentLeave$ = new BehaviorSubject<[]>([]);
  // private _employee = new Subject<[]>();
  // employee$ = this._employee.asObservable();

  currentLeaveStatus$ = new BehaviorSubject<[]>([]);
  
  constructor() { 
    
  }
  onSendleave(leaves:any){
   
      this.currentLeave$.next(leaves);
  }
  onLeaveStatus(status:any){
    this.currentLeaveStatus$.next(status);
    console.log(status)
  }
}
