import { Component, OnInit, Output ,EventEmitter} from '@angular/core';
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

  constructor() {
    this.leavedetail.emit(this.leaveDetails);
  }

  onApplyLeave(){
    this.leaveDetails.push({
      name: this.employeeName,
      startdate: this.StartDate,
      enddate: this.EndDate,
      
    });
    
  }
}
