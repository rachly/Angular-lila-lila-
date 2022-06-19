import { Component, Input, OnInit,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
//import * as EventEmitter from 'events';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
@Component({
  selector: 'app-about',
  animations: [
    trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('100ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('100ms', style({ opacity: 0 }))
      ])
    ]),
  ],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {
  public selectImage:number=0;

  
  ngOnInit(): void {
  
  }
 
  
  constructor( ) { }

  
}
  
 
