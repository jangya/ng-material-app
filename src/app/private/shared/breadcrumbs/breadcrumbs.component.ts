import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { CommonService } from '../../services';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {

  constructor(private commonService: CommonService) { }

  @Output() toggleSidenav = new EventEmitter<void>();
  
  getTitle() {
    return this.commonService.title;;
  }
  ngOnInit() {
    
  }

}
