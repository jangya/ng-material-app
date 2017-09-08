
import { Injectable }      from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { Http,Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { config } from '../config';
import {User} from './user';
// Avoid name not found warnings
// declare var Auth0Lock: any;
@Injectable()
export class AuthService {
  public token: string;
  public headers: any;

  constructor(private http: Http) {
      // set token if saved in local storage
      var currentUser = JSON.parse(localStorage.getItem('currentUser'));
      this.token = currentUser && currentUser.token;
      this.headers = new Headers();
      this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
  }


  signup(user: User): Observable<boolean> {
      return this.http.post(config.baseUrl+'api/register', user)
          .map((response: Response) => {
              let token = response.json() && response.json().token;
              if (token) {
                  // set token property
                  this.token = token;
                  // store username and jwt token in local storage to keep user logged in between page refreshes
                  localStorage.setItem('currentUser', JSON.stringify({ email: user.email, token: token }));
                  return true;
              } else {
                  return false;
              }
          });
  }
  login(email: string, password: string): Observable<boolean> {
      return this.http.post(config.baseUrl+'api/login', { email: email, password: password })
          .map((response: Response) => {
              // login successful if there's a jwt token in the response
              let token = response.json() && response.json().token;
              if (token) {
                  // set token property
                  this.token = token;

                  // store username and jwt token in local storage to keep user logged in between page refreshes
                  localStorage.setItem('currentUser', JSON.stringify({ email: email, token: token }));

                  // return true to indicate successful login
                  return true;
              } else {
                  // return false to indicate failed login
                  return false;
              }
          });
  }

  logout(): void {
      // clear token remove user from local storage to log user out
      this.token = null;
      localStorage.removeItem('currentUser');
  }
  // Configure Auth0
  // lock = new Auth0Lock('fNYAZ38AkXPXBQAEtSVc23bP2FRyR0w4', 'jangya.auth0.com', {});
  //
  // constructor() {
  //   // Add callback for lock `authenticated` event
  //   this.lock.on("authenticated", (authResult) => {
  //     localStorage.setItem('id_token', authResult.idToken);
  //   });
  // }
  //
  // public login() {
  //   // Call the show method to display the widget.
  //   this.lock.show();
  // }
  //
  // public authenticated() {
  //   // Check if there's an unexpired JWT
  //   // This searches for an item in localStorage with key == 'id_token'
  //   return tokenNotExpired();
  // }
  //
  // public logout() {
  //   // Remove token from localStorage
  //   localStorage.removeItem('id_token');
  // }

}
