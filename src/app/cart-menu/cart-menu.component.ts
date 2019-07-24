import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-cart-menu',
  templateUrl: './cart-menu.component.html',
  styleUrls: ['./cart-menu.component.css']
})
export class CartMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.CartJs();
  }

  CartJs(){

  }

}
