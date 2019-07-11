import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyAccountComponent } from './my-account/my-account.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrderMenuComponent } from './order-menu/order-menu.component';

const routes: Routes = [
  { path: "", redirectTo: "dashboard", pathMatch: "full"},
  {path:'dashboard',component:DashboardComponent},
  {path:'my-account',component:MyAccountComponent},
  {path:'order-menu',component:OrderMenuComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
