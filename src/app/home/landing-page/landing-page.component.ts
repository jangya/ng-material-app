import { Component, OnDestroy, OnInit, } from '@angular/core';
import {LoginComponent} from '../../private/auth/login/login.component'
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnDestroy, OnInit {

  public body:any;
  
  public constructor() {
    this.body = document.querySelector('body');
  }
  
  public ngOnInit():any {
    this.body.className += " landing-page";
  }
  
  
  public ngOnDestroy():any {
    this.body.classList.remove("landing-page");
  }

}
