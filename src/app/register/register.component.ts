import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { UserService } from '../_services/user.service';
import { AlertService } from '../_services/alert.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  loading = false;
  submitted = false;

  constructor( private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private alertService: AlertService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });
  }

   get f() { return this.registerForm.controls; }

   onSubmit() {
       this.submitted = true;

       if (this.registerForm.invalid) {
           return;
       }

       this.loading = true;
       this.userService.create(this.registerForm.value)
           .pipe(first())
           .subscribe(
               data => {
                   this.alertService.success('Registration successful', true);
                   this.router.navigate(['/login']);
               },
               error => {
                   this.alertService.error(error);
                   this.loading = false;
               });
   }

}
