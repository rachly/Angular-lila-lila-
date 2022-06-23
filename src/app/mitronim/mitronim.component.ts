import { Component, OnInit } from '@angular/core';
import { Image } from '../Models/image.module ';
import { Products } from '../Models/Products ';
import { ProductService } from '../product.service';
// import { Byte } from '@angular/compiler-cli';
import { min } from 'rxjs/operators';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-mitronim',
  templateUrl: './mitronim.component.html',
  styleUrls: ['./mitronim.component.css']
})
export class MitronimComponent implements OnInit {
  ArrP:Products[]=[];
  selectImage?:number|null;
  userAdmin:boolean=false;
  selectEditP:Products =new Products(-5);
  old:boolean=false;
  startPage:string=" ";
  type:number=-1;
  flag:boolean=false;
  ngOnInit(): void {
 this.startPage=this.route.url;
 console.log(this.startPage)
 switch(this.startPage){
  
   case "/mazaim" :
     this.type=1
     break;
   case "/mitronim":
     this.type=2
     break;
     case"/raitim":
    this.type=3
    break;
    case"/kids-bad-room":
    this.type=4;
    break;
    case"/parntes-bad-room":
    this.type=5;
    break;
    case"/closets":
    this.type=6
    break;
    default:
      this.type=-1
      break;
 } 
 console.log(this.type);
    this.userAdmin=this.user.getIsUserAdmin();
    this.user.isUserAdminObserv.subscribe(x=>this.userAdmin=x)   
   
    this.ArrP=[];
    this.getAll();
  }
 //ImgUrl = `data:image/png;base64,${{this.inspectionDetails.reportImage}}`;
  getAll(){
    if(this.old){
    this.product.AllProdact(this.type).subscribe(s=>{
      this.ArrP=s, 
    console.log(this.ArrP)}
    ,e=>{console.log(e)})
    }
    else{
    this.product.AllOldProdacts(this.type).subscribe(s=>{this.ArrP=s, 
      console.log(this.ArrP)}
      ,e=>{console.log(e)})
    }
    this.old=!this.old;
   }
   selectEdit(select:Products){
     this.selectEditP=select;
     console.log(this.selectEditP)
   }
  all(){
    
  }
   deleteProdact(select:number){ 
     
    this.product.DeleteProdact(select).subscribe(s=>{console.log("deleted"+select) ,this.flag=true },e=>{console.log(e)})
   if(this.flag==true){
    this.sweet();
   }
   }
   sweet(){
    Swal.fire({    
      icon: 'success',
      title: 'המוצר נמחק בהצלחה',
      showConfirmButton: false,
      timer: 1500
    })
   }
   addNew(){
     this.selectEditP=new Products(-1);
   }


  constructor(private product:ProductService,private user:UserService,private route:Router ) { }

}
