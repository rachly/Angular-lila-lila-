import { Component, OnInit } from '@angular/core';
import { User } from '../Models/User ';
import { UserService } from '../user.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  stagger
  // ...
} from '@angular/animations';
import { Image } from '../Models/image.module ';
// import { AotSummaryResolver } from '@angular/compiler';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations:[
    trigger('photosAnimation',[
      transition('* => *',[
       query('img',style({transform:'translateX(-100%)'})),
       query('img',stagger('600ms',[
         animate('900ms',style({transform:'translateX(0)'}))
       ]))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  gridColumns = 3;
   show=false;
  
  ArrU:User []=[];
  ngOnInit(): void {   
   this.ArrU=[];
    this.getall();
  

  }
constructor(public userService:UserService) { }

  getall(){
    this.userService.AllUser().subscribe(s=>{
      this.ArrU=s;
      console.log(this.ArrU)}
      ,e=>console.log(e));
   
  }
  get stateName(){
    return this.show?'show':'hide' 
   }
   toggle(){
     this.show=!this.show;
   }
   
 
}
