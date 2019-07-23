import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyAccountComponent } from './my-account/my-account.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrderMenuComponent } from './order-menu/order-menu.component';
import { AddMenuComponent } from './add-menu/add-menu.component';

const routes: Routes = [
  { path: "", redirectTo: "dashboard", pathMatch: "full"},
  {path:'dashboard',component:DashboardComponent},
  // {path:'dashboard',component:DashboardComponent, loadChildren: 'app/dashboard/dashboard.module#DashboardModule'},
  {path:'my-account',component:MyAccountComponent},
  {path:'order-menu',component:OrderMenuComponent},
  {path:'add-menu',component:AddMenuComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
