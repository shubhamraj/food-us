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
  loadAPI: Promise<any>;

  constructor(private router: Router) {
  //   this.loadAPI = new Promise((resolve) => {
  //     this.loadScript();
  //     resolve(true);
     
  // });

   }

   public loadScript() {        
    var isFound = false;
    var scripts = document.getElementsByTagName("script")
    for (var i = 0; i < scripts.length; ++i) {
        if (scripts[i].getAttribute('src') != null && scripts[i].getAttribute('src').includes("loader")) {
            isFound = true;
        }
    }

    if (!isFound) {
        var dynamicScripts = ["https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"];
        // var dynamicScripts = '.src/'
        console.log(dynamicScripts)

        for (var i = 0; i < dynamicScripts .length; i++) {
            let node = document.createElement('script');
            node.src = dynamicScripts [i];
            node.type = 'text/javascript';
            node.async = false;
            node.charset = 'utf-8';
            document.getElementsByTagName('div')[0].appendChild(node);
        }

    }
    }

 

  ngOnInit() {
  //   this.loadAPI = new Promise((resolve) => {
  //     this.loadScript();
  //     resolve(true);
  // });
    this.onAnimation();
    
  }

  onOrderMenu(){
    // this.router.navigate(['order-menu']);

    this.router.navigate(['order-menu']);
   
  }

  onAnimation(){
  
  }

}
