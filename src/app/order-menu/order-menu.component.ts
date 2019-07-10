import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { DatepickerOptions } from 'ng2-datepicker';
import * as frLocale from 'date-fns/locale/fr';

@Component({
  selector: 'app-order-menu',
  templateUrl: './order-menu.component.html',
  styleUrls: ['./order-menu.component.css']
})
export class OrderMenuComponent implements OnInit {
  TodayDate:any


  
  constructor() { 

  }

  ngOnInit() {
    this.TodayDate = new Date();
  }

}
