import { Injectable }       from '@angular/core';
import { HttpInterceptor }  from './http-interceptor';
import { Response }         from '@angular/http';
import { config }           from '../config';
import { Observable }       from 'rxjs';
import 'rxjs/add/operator/map';
import { User }             from '../auth/user';

@Injectable()
export class CommonService {
  // Notice we inject "our" HttpClient here, naming it Http so it's easier
  constructor(private http: HttpInterceptor) { }

  getUserInfo(): Observable<User> {
    // setTimeout(()=>{this.pService.done()}, 4000);
    // get users from api
        // return this.http.get('/api/users', options)
        //     .map((response: Response) => response.json());
    return this.http.get(config.baseUrl+'api/profile')
        .map((response: Response) => response.json());

  }
}
