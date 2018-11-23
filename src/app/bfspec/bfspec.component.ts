import { Component, OnInit } from '@angular/core';
declare var $:any;
declare var jQuery:any;
@Component({
  selector: 'app-bfspec',
  templateUrl: './bfspec.component.html',
  styleUrls: ['./bfspec.component.css']
})
export class BfspecComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.silde()
  }
  silde(){
    if ($('.accordion-box1').length) {
      $('.accordion-box1 .acc-btn').click(function() {
          if ($(this).hasClass('active') !== true) {
              $('.accordion-box1 .acc-btn').removeClass('active');
          }
  
          if ($(this).next('.acc-content').is(':visible')) {
              $(this).removeClass('active');
              $(this).next('.acc-content').slideUp(500);
          } else {
              $(this).addClass('active');
              $('.accordion-box1 .acc-content').slideUp(500);
              $(this).next('.acc-content').slideDown(500);
          }
      });
  }
  }
}
