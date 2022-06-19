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
//lat=32.80290908348538;
//lng=35.00423166919751;

//title: string = 'AGM project';
// lat: number;
// lng: number;
// radius: number;
// address: string;
// zoom: number;
// mtitle: string;//WHY?
// url="https://raw.githubusercontent.com/Concept211/Google-Maps-Markers/master/images/marker_purple.png"
// // url="http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
// url1= "https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi2_hdpi.png"
// private geoCoder;

@ViewChild('search')
public searchElementRef: ElementRef // לא ברור - בשימוש, אך לא ברור איך זה מתבצע
  //
  | undefined// לא ברור - בשימוש, אך לא ברור איך זה מתבצע
//
// public appearance = Appearance;
// public selectedAddress: PlaceResult;
// @Input() companyLocation: LatLngLiteral = { lat: 0, lng: 0 }
// //@Input() CompaniesList: User[]=[]; 
// // @Output() selectLocation: EventEmitter<LatLngLiteral> = new EventEmitter();
// @Output() selectLocation: EventEmitter<string[]> = new EventEmitter();
// @Output() selectRadius: EventEmitter<number> = new EventEmitter();
// // , com: boolean = false
// constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) {
//   console.log("i am here");

// latitude=35.077659;
// longtitude=32.825631 ;

  constructor() { }
  // ngAfterViewInit(): void {
  //   this.map = new google.maps.Map(this.mapElement.nativeElement, {
  //     center: { lat: 32.826085,  lng:35.079674  },
  //     zoom: 14,
  //   });  }
  // onChoseLocation(event:Event){
  //   console.log(event)
  // }
// @ViewChild('mapElement',{static: true})mapElement:any;
  ngOnInit(): void { 
    // this.mapsAPILoader.load().then(() => {
    //  //אחר שהמפה נט/ ל
    //   this.setCurrentLocation();
    //   this.geoCoder = new google.maps.Geocoder;
    //   let autocomplete = new google.maps.places.Autocomplete(this
    //   .searchElementRef.nativeElement);
    //   debugger
    //   autocomplete.addListener("place_changed", () => {
    //   this.ngZone.run(() => {
      // נותן תוצאת מיקום
    //   let place = autocomplete.getPlace();
    //   //אימות תוצאה
    //   if (place.geometry === undefined || place.geometry ===
    //   null) {
    //   return;
    //   }
      //set latitude, longitude and zoom
    //   this.lat = place.geometry.location.lat();
    //   this.lng = place.geometry.location.lng();
    //   this.zoom = 14;
    //   // הוספת סמן למפה
    //   this.markers = [{
      
    //   lat: this.lat,
    //   lng: this.lng,
    //   draggable: true
    //   }];
    //   });
    //   });
    //   });
    //   }
      
      //פונקציית מציאת מיקום נוכחי:
      
      // Get Current
     // private setCurrentLocation() {
        // if ('geolocation' in navigator) {
        // navigator.geolocation.getCurrentPosition((position) => {
        // this.lat = this.lat1 = position.coords.latitude;
        // this.lng = this.lng1 = position.coords.longitude;
        // this.zoom = 14;
        // this.getAddress(this.lat, this.lng);
        // });
        // }
        // }


       
          //
  }   }