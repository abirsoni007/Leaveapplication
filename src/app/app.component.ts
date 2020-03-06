import { Component, Output, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Leaveapllication';
  leaDetails = [];
  getDetails(data: any){
    this.leaDetails.push({
    
    })
    console.log(this.leaDetails[0])
  }
}
