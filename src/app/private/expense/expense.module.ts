import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { MdInputModule, MdCardModule, MdRadioModule,
         MdButtonModule, MdButtonToggleModule, MdDialogModule} from '@angular/material';
import { SharedModule } from '../shared/shared.module';
import { routedComponents, ExpenseRoutingModule } from './expense.routes';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AddMembersComponent } from './add-members/add-members.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    MdInputModule,
    MdRadioModule,
    MdCardModule,
    MdDialogModule,
    MdButtonToggleModule,
    MdButtonModule,
    FlexLayoutModule,
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