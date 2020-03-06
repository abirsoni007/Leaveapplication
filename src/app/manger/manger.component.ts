import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manger',
  templateUrl: './manger.component.html',
  styleUrls: ['./manger.component.css']
})
export class MangerComponent implements OnInit {
  public LeaveDetails = [];
  constructor() { }

  ngOnInit(): void {
  }

}
