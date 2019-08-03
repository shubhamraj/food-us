import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css']
})
export class AddMenuComponent implements OnInit {
  TodayDate:any;
  CartList:any=[];
  City:any;
  Vendor:any;
  MainMenu:any;
  ExtraMenu:any;
  SidesMenu:any;
  Qunitity:any;
  Price:any;

  constructor(private router: Router) { }

  ngOnInit() {
    this.TodayDate = new Date();
    this.QunitityJs();
  }

  AddCart(){
    this.Qunitity=1;
    this.Price=35;
    var list = {"City":this.City,"MealType":this.MainMenu,"Extras":this.ExtraMenu,"Qunitity":this.Qunitity, "Price":this.Price }
    this.CartList.push(list);


    console.log(this.CartList)
  

  }

  onCheckoutSubmit(){
   

    this.router.navigate(['checkout']);
  }

  QunitityJs(){
    $(document).ready(function(){
      $('.count-a').prop('disabled', true);
       $(document).on('click','.plus-a',function(){
      $('.count-a').val(parseInt($('.count-a').val()) + 1 );
      });
        $(document).on('click','.minus-a',function(){
        $('.count-a').val(parseInt($('.count-a').val()) - 1 );
          if ($('.count-a').val() == 0) {
          $('.count-a').val(1);
        }
          });

          $('.count-b').prop('disabled', true);
          $(document).on('click','.plus-b',function(){
         $('.count-b').val(parseInt($('.count-b').val()) + 1 );
         });
           $(document).on('click','.minus-b',function(){
           $('.count-b').val(parseInt($('.count-b').val()) - 1 );
             if ($('.count-b').val() == 0) {
             $('.count-b').val(1);
           }
             });

          $('.count-c').prop('disabled', true);
          $(document).on('click','.plus-c',function(){
          $('.count-c').val(parseInt($('.count-c').val()) + 1 );
          });

          $(document).on('click','.minus-c',function(){
          $('.count-c').val(parseInt($('.count-c').val()) - 1 );
            if ($('.count-c').val() == 0) {
            $('.count-c').val(1);
            }
          });


          $('.count-d').prop('disabled', true);
          $(document).on('click','.plus-d',function(){
          $('.count-d').val(parseInt($('.count-d').val()) + 1 );
          });

          $(document).on('click','.minus-d',function(){
          $('.count-d').val(parseInt($('.count-d').val()) - 1 );
            if ($('.count-d').val() == 0) {
            $('.count-d').val(1);
            }
          });

          $('.count-e').prop('disabled', true);
          $(document).on('click','.plus-e',function(){
          $('.count-e').val(parseInt($('.count-e').val()) + 1 );
          });

          $(document).on('click','.minus-e',function(){
          $('.count-e').val(parseInt($('.count-e').val()) - 1 );
            if ($('.count-e').val() == 0) {
            $('.count-e').val(1);
            }
          });

          // $('[data-toggle="tooltip"]').tooltip();

   });
  }

}
