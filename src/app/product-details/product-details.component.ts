import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // $(document).ready(function(){

    //   $(".tb").hover(function(){
      
    //   $(".tb").removeClass("tb-active");
    //   $(this).addClass("tb-active");
      
    //   current_fs = $(".active");
      
    //   next_fs = $(this).attr('id');
    //   next_fs = "#" + next_fs + "1";
      
    //   $("fieldset").removeClass("active");
    //   $(next_fs).addClass("active");
      
    //   current_fs.animate({}, {
    //   step: function() {
    //   current_fs.css({
    //   'display': 'none',
    //   'position': 'relative'
    //   });
    //   next_fs.css({
    //   'display': 'block'
    //   });
    //   }
    //   });
    //   });
      
    //   });

  let tab : string = 'tab1';
  let tab1 : any
  let tab2 : any
  let tab3 : any
  let Clicked : boolean
  
 



    function smallPic(check){
    //    console.log(check);
        if(check==1){
          this.tab = 'tab1';
        }else if(check==2){
          this.tab = 'tab2';
        }else{
          this.tab = 'tab3';
        }    
      
    }
  }

}
