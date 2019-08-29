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
  SelectVendor:any;
  Menu:any;
  Extras:any;
  Sides:any;

  CheckoutCart:any=0;
  CartProduct:any=[];
  GrandTotal:any=0;


  constructor(private router: Router) { 

  }

  ngOnInit() { 
   
    var tempgrandtotoal = 0;
    this.ExtraMenuChapatiPrice =10;
    this.ExtraMenuRotiPrice = 15;
    this.TodayDate = new Date();
    if(JSON.parse(localStorage.getItem('CartList')) != null){
      this.CartList =   JSON.parse(localStorage.getItem('CartList'));

    }
   
    this.CartProduct = this.CartList; 
 
  }

  AddCart(){
 

    var tempgrandtotoal = 0;
      if(this.City == undefined || this.City == null){
    

        Swal.fire({
          type: 'error',
          title: 'Oops...',
          text: 'Please Select City!',
          footer: '<a href>Why do I have this issue?</a>'
        })


      }else if(this.Vendor == undefined || this.Vendor == null){
        Swal.fire({
          type: 'error',
          title: 'Oops...',
          text: 'Please Select Vendor!',
          footer: '<a href>Why do I have this issue?</a>'
        })
      }else if(this.MealType == undefined || this.MealType == null){
        Swal.fire({
          type: 'error',
          title: 'Oops...',
          text: 'Please Select MealType!',
          footer: '<a href>Why do I have this issue?</a>'
        })
      }
      else 
      {
        if(this.SidesMenu == undefined){
          this.SidesQuantity = 0;
        }

        if(this.ExtraMenu == undefined){
          this.ExtrasQuantity = 0;
        }

        this.TotalPrice = (this.MQunitity*35) + (this.ExtrasQuantity * 10) + (this.SidesQuantity * 15);
        var list = {"City":this.City,"MealType":this.MealType,"MQunitity":this.MQunitity,"ExtraMenu":this.ExtraMenu,"ExtrasQuantity":this.ExtrasQuantity,"SidesMenu":this.SidesMenu,"SidesQuantity":this.SidesQuantity,"TotalPrice":this.TotalPrice }
        this.CartList.push(list);
      }
    
     
      this.CheckoutCart = this.CartList.lenght;
      this.CartProduct = this.CartList; 
    localStorage.setItem('CartList',JSON.stringify(this.CartList));

  }



  onMealQuntity(index, value){
    this.MQunitity = parseFloat(value);
    this.CartList[index].TotalPrice = (this.MQunitity*35) + (this.SidesQuantity*15) + (this.ExtrasQuantity*10);
    console.log()
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
      var tempgrandtotoal = 0;
    
    for(let i=0; i<this.CartList.length;i++){
      tempgrandtotoal =  this.CartList[i].TotalPrice + tempgrandtotoal;
   }
   this.GrandTotal = tempgrandtotoal;
  }



  onEditRow(index){
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

  CheckoutSubmit(){
    $('#DemoModal').removeClass('in show opct-low');
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
