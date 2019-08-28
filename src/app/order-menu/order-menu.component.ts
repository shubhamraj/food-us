import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { DatepickerOptions } from 'ng2-datepicker';
import * as frLocale from 'date-fns/locale/fr';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-order-menu',
  templateUrl: './order-menu.component.html',
  styleUrls: ['./order-menu.component.css']
})
export class OrderMenuComponent implements OnInit {
  TodayDate:any
  CartList:any=[];
  City:any;
  Vendor:any;
  MealType:any;
  ExtraMenu:any;
  SidesMenu:any;
  MQunitity:any=1;
  SidesQuantity:any=1;
  ExtrasQuantity:any=1;
  TotalPrice:any=0;
  ExtraMenuprice:any=0;
  ExtraMenuChapatiPrice:any;
  ExtraMenuRotiPrice:any;
  constructor(private router: Router) { }

  ngOnInit() { 
   
    this.ExtraMenuChapatiPrice =10;
    this.ExtraMenuRotiPrice = 15;
    this.TodayDate = new Date();
    if(JSON.parse(localStorage.getItem('CartList')) != null){
      this.CartList =   JSON.parse(localStorage.getItem('CartList'));
    }
   
  }

  AddCart(){
 
    // this.TotalPrice=35;
    this.MQunitity = 1;
      this.SidesQuantity =1;
    this.ExtrasQuantity = 1;


    console.log(this.City)
    console.log(this.Vendor)
    console.log(this.MealType)
    console.log(this.ExtraMenu);
    console.log(this.SidesMenu)
      if(this.City == undefined || this.City == null){
        swal.fire('Please Select City');
      }else if(this.Vendor == undefined || this.Vendor == null){
        swal.fire('Please Select Vendor');
      }else if(this.MealType == undefined || this.MealType == null){
        swal.fire('Please Select MealType');
      }
      else 
      {
        if(this.SidesMenu == undefined){
          this.SidesQuantity = 0;
        }

        if(this.ExtraMenu == undefined){
          this.ExtrasQuantity = 0;
        }

        console.log(this.MQunitity)
        this.TotalPrice = (this.MQunitity*35) + (this.ExtrasQuantity * 10) + (this.SidesQuantity * 15);
        var list = {"City":this.City,"MealType":this.MealType,"MQunitity":this.MQunitity,"ExtraMenu":this.ExtraMenu,"ExtrasQuantity":this.ExtrasQuantity,"SidesMenu":this.SidesMenu,"SidesQuantity":this.SidesQuantity,"TotalPrice":this.TotalPrice }
        this.CartList.push(list);
      }
    
       
      
      
      // console.log(this.CartList);
  
    // this.MealType='Select Menu';
    // this.Vendor = 'SelectVendor';
    // this.City='City';
    // this.ExtraMenu='Extras';
    // this.SidesMenu='Sides';
    localStorage.setItem('CartList',JSON.stringify(this.CartList));
  }

  onEditRow(index){
    console.log(index);
    var _rowNum = 'row-'+index;
    $('.'+_rowNum).removeClass('hide-input').addClass('hide-span');
    // $('.'+_rowNum).tog
  }

  onSaverow(index){
    var _rowNum = 'row-'+index;
    $('.'+_rowNum).removeClass('hide-span').addClass('hide-input');
  }

  onRemoveItems(index){
 
    swal.fire(
      {
      title: "Delete Confirmation",
      text: "Are You Sure, you want to Delete Order Item ?",
      type: "warning",
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Yes",
      cancelButtonText: "No",
      showCloseButton: true,
    })
    .then((willDelete) => {
      if(willDelete.value) {
        this.CartList.splice(index, 1);
        localStorage.setItem('CartList',JSON.stringify(this.CartList));
      }
    });

  }

  onMealQuntity(index, value){
    this.MQunitity = parseFloat(value);
    this.CartList[index].TotalPrice = (this.MQunitity*35) + (this.SidesQuantity*15) + (this.ExtrasQuantity*10);
    
  }

  onExtrasQuntity(index, value){
      console.log(value);
      this.ExtrasQuantity = parseFloat(value);
      this.CartList[index].TotalPrice =  (this.MQunitity*35) + (this.SidesQuantity*15) + (this.ExtrasQuantity*10);
  }

  onSidesQuantity(index, value){
    this.SidesQuantity = parseFloat(value);
    this.CartList[index].TotalPrice =  (this.MQunitity*35) + (this.SidesQuantity*15) + (this.ExtrasQuantity*10);
  }

  onCheckout(){

  }

  onSubmit(){
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


   });
  }

}
