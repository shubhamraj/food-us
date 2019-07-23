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

    $(document).ready(function() {
      $('.mdb-select').materialSelect();
      });

      
    this.TodayDate = new Date();
    this.QunitityJs();

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
   });
  }

}
