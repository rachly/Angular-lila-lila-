import { Component,AfterViewInit, EventEmitter, Input, OnInit, ViewChild } from '@angular/core';
import { ElementRef} from '@angular/core';
import {  Output,  } from '@angular/core';
//import { MouseEvent, LatLngLiteral, Circle } from '@agm/core';
//import { Location, Appearance, GermanAddress } from '@angular-material-extensions/google-maps-autocomplete';
// import PlaceResult = google.maps.places.PlaceResult;

import { NgZone } from '@angular/core';
// import { MapsAPILoader } from '@agm/core';
//import { LatLng } from '@agm/core/services/google-maps-types';
//import { User } from '../zClasses/use
import { Image } from '../Models/image.module ';
declare const google :any;
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
map:any;
lat=32.80290908348538;
lng=35.00423166919751;


  constructor() { }

  ngOnInit(): void { 
      
     
  }   }