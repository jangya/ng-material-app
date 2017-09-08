import { NgModule } from '@angular/core';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './private/services';
import { PageNotFoundComponent } from './page-not-found.component';
import { LandingPageComponent } from './home/landing-page/landing-page.component';

/***************************************************************
* Lazy Loading to Eager Loading
*
* 1. Remove the module and NgModule imports in `app.module.ts`
*
* 2. Remove the lazy load route from `app.routing.ts`
*
* 3. Change the module's default route path from '' to 'pathname'
*****************************************************************/
const routes: Routes = [
  { path: '', pathMatch: 'full', component: LandingPageComponent },
  { path: 'user', loadChildren: 'app/private/auth/auth.module#AuthModule' },
  {
    path: 'dashboard',
    loadChildren: 'app/private/dashboard/dashboard.module#DashboardModule',
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    canLoad: [AuthGuard]
  },
  {
    path: 'expense',
    loadChildren: 'app/private/expense/expense.module#ExpenseModule',
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    canLoad: [AuthGuard]
  },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: [
    AuthGuard
  ]
})
export class AppRoutingModule { }


// import {Routes,RouterModule} from "@angular/router";
// import { LandingPageComponent } from './home/landing-page/landing-page.component';

// const appRoutes:Routes = [
//   {path: '', component: LandingPageComponent, pathMatch: 'full'},
// ];
// export const AppRouting = RouterModule.forRoot(appRoutes);




// Main redirect
  // {path: '', redirectTo: 'starterview', pathMatch: 'full'},

  // // App views
  // {
  //   path: 'dashboards', component: BasicLayoutComponent,
  //   children: [
  //     {path: 'dashboard1', component: Dashboard1Component},
  //     {path: 'dashboard2', component: Dashboard2Component},
  //     {path: 'dashboard3', component: Dashboard3Component},
  //     {path: 'dashboard4', component: Dashboard4Component},
  //     {path: 'dashboard5', component: Dashboard5Component}
  //   ]
  // },
  // {
  //   path: 'dashboards', component: TopNavigationLayoutComponent,
  //   children: [
  //     {path: 'dashboard41', component: Dashboard41Component}
  //   ]
  // },
  // {
  //   path: '', component: BasicLayoutComponent,
  //   children: [
  //     {path: 'starterview', component: StarterViewComponent}
  //   ]
  // },
  // {
  //   path: '', component: BlankLayoutComponent,
  //   children: [
  //     { path: 'login', component: LoginComponent },
  //   ]
  // },

  // // Handle all other routes
  // {path: '**',  redirectTo: 'starterview'}
