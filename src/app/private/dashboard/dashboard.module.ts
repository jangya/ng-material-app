import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {MdCardModule} from '@angular/material';
import { DashboardRoutingModule, routedComponents } from './dashboard.routes';
import { SharedModule } from '../shared/shared.module';
import { FlotModule } from './charts/flotChart';
import { IboxtoolsModule } from '../shared/iboxtools/iboxtools.module';
import { JVectorMapModule } from './map/jvectorMap';

@NgModule({
  imports: [
    CommonModule,
    MdCardModule,
    SharedModule, 
    FlotModule, 
    JVectorMapModule,
    IboxtoolsModule, 
    DashboardRoutingModule
  ],
  declarations: [routedComponents]
})
export class DashboardModule { }