import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;

  constructor(private router: Router ,
    private authenticationService: AuthenticationService ) { }

  ngOnInit(): void {
    this.isLoggedIn$ = this.authenticationService.isLoggedIn;
  }

  skype(){
    this.router.navigate(['skype']);
  }

  gimp(){
    this.router.navigate(['gimp']);
  }

  home() {
    this.router.navigate(['accueil']);
  }

  logiciels(){
    this.router.navigate(['logiciels']);
  }

  onLogout() {
    this.authenticationService.logout();
  }

}
