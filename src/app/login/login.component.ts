import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';
import { AuthenticationService } from '../_services/authentication.service';
import { AlertService } from '../_services/alert.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(private formBuilder: FormBuilder ,
      private http: HttpClient , 
      private router: Router , 
      private route: ActivatedRoute ,
      private authenticationService: AuthenticationService,
      private alertService: AlertService) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    });
     // reset login status
     this.authenticationService.logout();

     // get return url from route parameters or default to '/' accueil
     //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
     this.returnUrl = this.route.snapshot.queryParams['accueil'] || 'accueil';
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }

    this.loading = true;
    this.authenticationService.login(this.f.username.value, this.f.password.value)
        .pipe(first())
        .subscribe(
            data => {
              this.loading = true;
              this.authenticationService.sendLoggedIn(true);
                this.router.navigate([this.returnUrl]);
            },
            error => {
                  this.authenticationService.sendLoggedIn(false);
                this.alertService.error(error);
                this.loading = false;
            });
}



}
