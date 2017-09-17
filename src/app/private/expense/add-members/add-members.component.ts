import { Component, OnInit, Inject } from '@angular/core';
import {MdDialogRef, MD_DIALOG_DATA} from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-members',
  templateUrl: './add-members.component.html',
  styleUrls: ['./add-members.component.css'],
})
export class AddMembersComponent implements OnInit {

  constructor(
    private router: Router,
    public dialogRef: MdDialogRef<AddMembersComponent>,
    @Inject(MD_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }
  close(){
    this.router.navigate(['/expense']);
  }
  moreMembers(){
    this.data.expense.members.push({'name':''});
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
 
}
