import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpenseComponent } from './expense.component';
import { CreateExpenseComponent } from './create-expense/create-expense.component';
import { LayoutComponent } from '../shared/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: ExpenseComponent,
      },
      {
        path: 'create',
        component: CreateExpenseComponent,
      }
    ],
    data: {title: 'Expense'} 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpenseRoutingModule { }

export const routedComponents = [ExpenseComponent, CreateExpenseComponent];