import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { routedComponents, ExpenseRoutingModule } from './expense.routes';
import { AddMembersComponent } from './add-members/add-members.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    ExpenseRoutingModule
  ],
  declarations: [
    routedComponents, 
    AddMembersComponent
  ],
  exports: [AddMembersComponent],
  entryComponents: [
    AddMembersComponent
  ]
})
export class ExpenseModule { }