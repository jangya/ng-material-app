import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class HttpInterceptor {

  constructor(private http: Http, private authService: AuthService) {}

  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Bearer ' + this.authService.token);
    // headers.append({ 'Authorization': 'Bearer ' + this.authService.token });
  }

  get(url) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.get(url, {
      headers: headers
    });
  }

  post(url, data) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.post(url, data, {
      headers: headers
    });
  }
}
