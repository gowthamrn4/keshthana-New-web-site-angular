import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pdofferings',
  templateUrl: './pdofferings.component.html',
  styleUrls: ['./pdofferings.component.css']
})
export class PdofferingsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onClick(){
    let x = document.querySelector("#construction");
    if (x){
        x.scrollIntoView();
    }
}
onClick1(){
  let x = document.querySelector("#engineering");
  if (x){
      x.scrollIntoView();
  }
}
onClick2(){
  let x = document.querySelector("#engineering2");
  if (x){
      x.scrollIntoView();
  }
}
onClick3(){
  let x = document.querySelector("#planning");
  if (x){
      x.scrollIntoView();
  }
}
}
