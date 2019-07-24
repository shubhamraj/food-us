import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import * as jQuery from 'jquery';

import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],

})
export class DashboardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.onAnimation();
  }

  onOrderMenu(){
    // this.router.navigate(['order-menu']);

    this.router.navigate(['add-menu']);
   
  }

  onAnimation(){
  
  }

}
