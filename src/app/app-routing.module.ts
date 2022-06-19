import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminstarComponent } from './adminstar/adminstar.component';
import { CategoriesComponent } from './categories/categories.component';
import { ClosetsComponent } from './closets/closets.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { EnterProductsComponent } from './enter-products/enter-products.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { KidsBadRoomComponent } from './kids-bad-room/kids-bad-room.component';
import { LocationComponent } from './location/location.component';
import { MazaimComponent } from './mazaim/mazaim.component';
import { MitronimComponent } from './mitronim/mitronim.component';
import { ParntesBadRoomComponent } from './parntes-bad-room/parntes-bad-room.component';
import { RaitimComponent } from './raitim/raitim.component';

const routes: Routes = [
 {path:" ",component:HomeComponent,},
{path:"about",component:AboutComponent},
{path:"categories",component:CategoriesComponent},
{path:"contact-us",component:ContactUsComponent},
{path:"enter-products",component:EnterProductsComponent},
// {path:"footer",component:FooterComponent},
{path:"app-adminstar",component:AdminstarComponent},
{path:"home",component:HomeComponent},
{path:"location",component:LocationComponent},
{path:"raitim",component:MitronimComponent},
{path:"mazaim",component:MitronimComponent},
{path:"mitronim",component:MitronimComponent},
{path:"closets",component:MitronimComponent},
{path:"parntes-bad-room",component:MitronimComponent},
{path:"kids-bad-room",component:MitronimComponent},
{path:"**" ,redirectTo:"home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
