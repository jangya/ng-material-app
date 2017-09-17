import { Injectable }       from '@angular/core';
import { HttpInterceptor }  from './http-interceptor';
import { Response }         from '@angular/http';
import { config }           from '../config';
import { Observable }       from 'rxjs';
import 'rxjs/add/operator/map';
import { User }             from '../auth/user';
import {Title} from '@angular/platform-browser';

@Injectable()
export class CommonService {
  _title = '';
  get title(): string { return this._title; }
  
  set title(title: string) {
    this._title = title;
    if (title !== '') {
      title = `${title} | `;
    }
    this.bodyTitle.setTitle(`${title}Angular Material`);
    console.log("title",title);
  }
  // Notice we inject "our" HttpClient here, naming it Http so it's easier
  constructor(private http: HttpInterceptor,private bodyTitle: Title) { }

  getUserInfo(): Observable<User> {
    // setTimeout(()=>{this.pService.done()}, 4000);
    // get users from api
        // return this.http.get('/api/users', options)
        //     .map((response: Response) => response.json());
    return this.http.get(config.baseUrl+'api/profile')
        .map((response: Response) => response.json());

  }  
}
