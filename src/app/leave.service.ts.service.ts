import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';


export class LeaveService {
  currentNameSubject$ = new BehaviorSubject<[]>([]);
  private _employee = new Subject<[]>();
  employee$ = this._employee.asObservable();
  constructor() { 
    
  }
  onSendleave(detail:any){
   
      this.currentNameSubject$.next(detail)
  }
}
