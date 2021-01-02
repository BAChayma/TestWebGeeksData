import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;
  isCollapsed: boolean = true;

  constructor(private authenticationService: AuthenticationService , 
    private router: Router , 
    private http: HttpClient , 
    private route: ActivatedRoute) 
  {
    
  }

  ngOnInit(): void {
    this.isLoggedIn$ = this.authenticationService.getLoggedIn();
  }

  home() {
    this.router.navigate(['accueil']);
  }

  logiciels(){
    this.router.navigate(['logiciels']);
  }

  onLogout() {
    this.authenticationService.logout();
    this.authenticationService.sendLoggedIn(false);
  }

}
