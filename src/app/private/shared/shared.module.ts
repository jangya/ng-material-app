import { CommonModule } from '@angular/common';
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {MdSidenavModule, MdButtonModule, MdDatepickerModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import {IboxtoolsModule} from './iboxtools/iboxtools.module';
import {FooterComponent} from "./footer/footer.component";
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutComponent } from './layout/layout.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MdSidenavModule,
    FlexLayoutModule,
    MdDatepickerModule,
    MdButtonModule
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    LayoutComponent,
    BreadcrumbsComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    BreadcrumbsComponent
  ],
})

export class SharedModule {}
