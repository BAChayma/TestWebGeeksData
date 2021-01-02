import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient , private router: Router ) { }

    login(username: string, password: string) {
        return this.http.post<any>('/api/authenticate', { username: username, password: password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }

                return user;
            }));
    }

    logout() {
        localStorage.removeItem('currentUser');
        this.router.navigate(['login']);
    }

    public loggedIn = new Subject<boolean>(); // {1}
    sendLoggedIn(loggedIn: boolean){
      this.loggedIn.next(loggedIn);
    }
    getLoggedIn():Observable<boolean>{
      return this.loggedIn.asObservable();
    }
    private menu = new BehaviorSubject<boolean>(false);
    get isLoggedIn() {
      return this.loggedIn.asObservable(); // {2}
    }
}