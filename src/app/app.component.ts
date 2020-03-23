import { Component, Output, Input } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Leaveapllication';
  loadedFeature = 'employee';
  // masterArray = ['Create', 'Foo', 'Bar'];


  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
