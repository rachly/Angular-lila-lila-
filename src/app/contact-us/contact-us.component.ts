import { Component,AfterViewInit, EventEmitter, Input, OnInit, ViewChild } from '@angular/core';
//import { MouseEvent, LatLngLiteral, Circle } from '@agm/core';
//import { Location, Appearance, GermanAddress } from '@angular-material-extensions/google-maps-autocomplete';
// import PlaceResult = google.maps.places.PlaceResult;
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

// import { MapsAPILoader } from '@agm/core';
//import { LatLng } from '@agm/core/services/google-maps-types';
//import { User } from '../zClasses/use
import { Image } from '../Models/image.module ';

// import { GoogleMap, MapDirectionsService, MapInfoWindow, MapMarker } from '@angular/google-maps';
declare const google :any;
declare const L: any;
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  
 

ngOnInit() {
 
    }
    center: google.maps.LatLngLiteral = {lat:32.82494392033777, lng: 35.07851062088147};
    zoom = 19.9;
    markerOptions: google.maps.MarkerOptions = {draggable: false};
    markerPositions: google.maps.LatLngLiteral[] = [{lat:32.82494392033777, lng: 35.07851062088147}];
  
    addMarker(event: google.maps.MapMouseEvent|any) {
    }


constructor() {}



}
  

