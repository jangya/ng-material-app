import { Injectable }      from '@angular/core';
import { Response } from '@angular/http';
import { config }          from '../config';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { CommonService } from '../common/common.service'
import { HttpInterceptor } from '../common/http-interceptor';
import { Expense } from './expense';

@Injectable()
export class ExpenseService {
  
  constructor(
    private http: HttpInterceptor
  ) {}

  getExpenses(): Observable<Expense[]> {
    return this.http.get(config.baseUrl+'api/expense')
        .map((response: Response) => response.json());

  }
  createExpenses(expense: Expense): Observable<Expense> {
    return this.http.post(config.baseUrl+'api/expense',expense)
        .map((response: Response) => response.json());
  }
}