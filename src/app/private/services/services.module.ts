import { NgModule } from '@angular/core';
import { HttpInterceptor, CommonService, AuthService, ExpenseService, AuthGuard } from './';

@NgModule({
    providers: [
        CommonService,
        HttpInterceptor,
        AuthService,
        ExpenseService,
        AuthGuard
    ]
})
export class ServicesModule { }
