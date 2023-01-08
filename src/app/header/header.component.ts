import { style } from '@angular/animations';
import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

displaybars:any="block";
displaytimes="none";
nav = document.querySelector('nav');
classToggled = true;
  constructor() {

   
   }

  ngOnInit(): void {
  }
  show(){
    this.displaybars='none';
    this.displaytimes='block';
    this.classToggled=false
      
  }
  hide(){
    this.displaybars='block';
    this.displaytimes='none';
    this.classToggled=true
   

    
  }
}
