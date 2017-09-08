import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { LayoutComponent } from '../shared/layout/layout.component';
import { AuthGuard } from '../services';

const routes: Routes = [
  { path: '', 
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      }
    ],
    data: {title: 'Dashboard'} 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule { }

export const routedComponents = [DashboardComponent];
