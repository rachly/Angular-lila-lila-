import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EnterProductsComponent } from './enter-products/enter-products.component';
import { FooterComponent } from './footer/footer.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LocationComponent } from './location/location.component';
import { AboutComponent } from './about/about.component';
import { CategoriesComponent } from './categories/categories.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatListModule } from '@angular/material/list'; 
//import { FlexLayoutModule } from '@angular/flex-layout';
//import { StickyNavModule } from 'ng2-sticky-nav';
import { LightboxModule } from 'ngx-lightbox';
import {MatMenuModule} from '@angular/material/menu';
import { GallreyCarousalComponent } from './gallrey-carousal/gallrey-carousal.component';
import { RaitimComponent } from './raitim/raitim.component';
import { MazaimComponent } from './mazaim/mazaim.component';
import { MitronimComponent } from './mitronim/mitronim.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { AdminstarComponent } from './adminstar/adminstar.component';
import { KidsBadRoomComponent } from './kids-bad-room/kids-bad-room.component';
import { ParntesBadRoomComponent } from './parntes-bad-room/parntes-bad-room.component';
import { ClosetsComponent } from './closets/closets.component';
//import { AgmCoreModule } from '@agm/core';
// import { ClosetsComponent } from './closets/closets.component';
//import {AlertModule} from 'ng2-bootstrap/ng2-bootstrap';
// import { GoogleMapsModule } from '@angular/google-maps';

import {  HttpClientJsonpModule } from '@angular/common/http';
import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  declarations: [ 
  
    AppComponent,
    HomeComponent,
    EnterProductsComponent,
    FooterComponent,
    ContactUsComponent,
    LocationComponent,
    AboutComponent,
    CategoriesComponent,
    NavComponent,
    GallreyCarousalComponent,
    RaitimComponent,
    MazaimComponent,
    MitronimComponent,
    SideNavComponent,
    AdminstarComponent,
    KidsBadRoomComponent,
    ParntesBadRoomComponent,
    ClosetsComponent,
    ClosetsComponent,
    // MatMenuModule

  ],
  imports: [
    CommonModule,
    GoogleMapsModule,
    HttpClientModule,
    HttpClientJsonpModule,
  // NgbAlertModule,
   // NgbPaginationModule,
   // AlertModule,
    LightboxModule,
    BrowserModule,
    FormsModule,
    //FlexLayoutModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    MatListModule,
    MatMenuModule,
  
  //  AgmCoreModule.forRoot({
  //   apiKey: 'AIzaSyDqZLNbg8jChwp2cTfEmaWPphr33qCOQb4',
  //  // AIzaSyDqZLNbg8jChwp2cTfEmaWPphr33qCOQb4
  //  // libraries: ['places']
  // })
  ],
  exports:[
    MatIconModule,
    MatButtonModule,
    MatSidenavModule, 
    MatToolbarModule
  ],
  providers: [ ],
  bootstrap: [AppComponent],
   schemas: [
 CUSTOM_ELEMENTS_SCHEMA
],
})

export class AppModule { }
