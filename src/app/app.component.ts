import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedMenu:any;

  constructor(private router: Router){}
  title = 'fd';


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
