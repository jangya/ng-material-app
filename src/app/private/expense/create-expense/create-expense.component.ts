import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';
import { Expense, ExpenseService, CommonService }  from "../../services";
import { AddMembersComponent } from '../add-members/add-members.component';

@Component({
  selector: 'app-create-expense',
  templateUrl: './create-expense.component.html',
  styleUrls: ['./create-expense.component.scss']
})
export class CreateExpenseComponent implements OnInit {
  
  
  constructor(
    private expenseService: ExpenseService,
    private router: Router,
    private commonService: CommonService,
    public dialog: MdDialog
  ) {
    this.commonService.title = "Create Expense";
  }
  expense = new Expense();
  ngOnInit() {
    this.expense.members=[{"name":""}];
  }
  createExpense(){
    this.openDialog();
    // this.expenseService.createExpenses(this.expense).subscribe(result => {
    //   this.expense = result;
    //   this.openDialog();
    // });
  }
  openDialog(): void {
    let dialogRef = this.dialog.open(AddMembersComponent, {
      width: '500px',
      data: { expense: this.expense }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result);
      // this.animal = result;
    });
  }
}