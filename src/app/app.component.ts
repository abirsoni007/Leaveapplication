import { Component, Output, Input } from '@angular/core';
import { LeaveService } from './leave.service.ts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Leaveapllication';
  loadedFeature ='employee';
 
  
  onNavigate(feature: string){
  this.loadedFeature= feature;
}
}
