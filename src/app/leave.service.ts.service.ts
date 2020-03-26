
// import { Subject, Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';


export class LeaveService {
  currentLeave$ = new BehaviorSubject<[]>([]);
  currentLeaveStatus$ = new BehaviorSubject<[]>([]);

  constructor() {
  }
  onSendleave(leaves: any) {

    this.currentLeave$.next(leaves);

  }
  onLeaveStatus(status: any) {
    this.currentLeaveStatus$.next(status);
  }
}
