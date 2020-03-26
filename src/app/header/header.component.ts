import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<string>();
  isAuth: boolean = false;
  constructor(private _auth: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
    this._auth.authentcatsubje.subscribe(value => {
      this.isAuth = value
    })

  }

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }
  onLogout() {
    this.isAuth = false;
    this.router.navigate(['login'])
  }

}
