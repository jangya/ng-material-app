import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-add-members',
  templateUrl: './add-members.component.html',
  styleUrls: ['./add-members.component.css'],
})
export class AddMembersComponent implements OnInit {

  constructor(
    private router: Router) { }

  ngOnInit() {
  }
  close(){
    this.router.navigate(['/expense']);
  }
 
}
