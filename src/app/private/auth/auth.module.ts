import {NgModule} from "@angular/core";
import {CommonModule} from '@angular/common';
import {MdInputModule, MdCardModule, MdButtonModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {AuthRoutingModule, routedComponents} from './auth.routes';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    routedComponents
  ],
  imports: [
    CommonModule,
    MdInputModule,
    FlexLayoutModule,
    MdCardModule,
    MdButtonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    AuthRoutingModule
  ],
  exports:[routedComponents]
})

export class AuthModule {
}
