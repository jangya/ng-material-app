import { CommonModule } from '@angular/common';
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {MdSidenavModule, MdButtonModule} from '@angular/material';
import {IboxtoolsModule} from './iboxtools/iboxtools.module';
import {FooterComponent} from "./footer/footer.component";
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MdSidenavModule,
    MdButtonModule
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    LayoutComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent
  ],
})

export class SharedModule {}
