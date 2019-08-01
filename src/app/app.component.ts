import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedMenu:any;

  loadAPI: Promise<any>;
  constructor(private router: Router){
 
  }
  title = 'fd';

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
            document.getElementsByTagName('head')[0].appendChild(node);
        }

    }
    }


  ngOnInit() {
    // this.onHome('Home');
    console.log('hi');
    this.selectedMenu ='Home';
  }

  onHome(value){
    
   
  this.router.navigate(['dashboard']);
  return this.selectedMenu = value
  }

  onMenu(value){
    return this.selectedMenu = value
  }

  onServices(value){
    return this.selectedMenu = value
  }

  onAbout(value){
    return this.selectedMenu = value
  }

  onContact(value){
    return this.selectedMenu = value
  }

  onMyAccount(value){
    this.router.navigate(['my-account']);
    return this.selectedMenu = value
  }

  isActive(item) {
    return this.selectedMenu === item;
  };




}
