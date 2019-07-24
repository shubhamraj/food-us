import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyAccountComponent } from './my-account/my-account.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrderMenuComponent } from './order-menu/order-menu.component';
import { NgDatepickerModule } from 'ng2-datepicker';
import { FormsModule } from '@angular/forms';
import { CartMenuComponent } from './cart-menu/cart-menu.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AddMenuComponent } from './add-menu/add-menu.component';
// import { DatePickerModule } from 'angular-material-datepicker';
@NgModule({
  declarations: [
    AppComponent,
    MyAccountComponent,
    DashboardComponent,
    OrderMenuComponent,
    CartMenuComponent,
    CheckoutComponent,
    AddMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgDatepickerModule,
    FormsModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
