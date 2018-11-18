import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-epc-service',
  templateUrl: './epc-service.component.html',
  styleUrls: ['./epc-service.component.css']
})
export class EpcServiceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onClick1(){
    let x = document.querySelector("#residential");
    if (x){
        x.scrollIntoView();
    }
  }
  onClick2(){
    let x = document.querySelector("#commercial");
    if (x){
        x.scrollIntoView();
    }
  }
  onClick3(){
    let x = document.querySelector("#industrial");
    if (x){
        x.scrollIntoView();
    }
  }
  onClick4(){
    let x = document.querySelector("#sports");
    if (x){
        x.scrollIntoView();
    }
  }
}
