import { Component, Input, OnInit } from '@angular/core';
import { Image } from '../Models/image.module ';
import { Products } from '../Models/Products ';
import { ProductService } from '../product.service';
// import { Byte } from '@angular/compiler-cli';
import { min } from 'rxjs/operators';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { animate,AnimationEvent, animation, style, transition, trigger } from '@angular/animations';
@Component({
  selector: 'app-mitronim',
  templateUrl: './mitronim.component.html',
  styleUrls: ['./mitronim.component.scss'],
  animations:[
    trigger('animation',[ 
    transition('void => visible',[
      style({transform:'scale(0.5)'}),
      animate('150ms',style({transform:'scale(1)'}))
    ]),
    transition('visible => void',[
      style({transform:'scale(1)'}),
      animate('150ms',style({transform:'scale(0.5)'}))
    ]),
   ] ),
   trigger('animation2?',[
    transition(':leave',[
      style({opacity:1}),
      animate('50ms',style({opacity:0.8}))
    ])
   ])
  ]
})
export class MitronimComponent implements OnInit {
  @Input() showCount=false;
  ArrP:Products[]=[];
  selectImage?:number|any;
  userAdmin:boolean=false;
  selectEditP:Products =new Products(-5);
  old:boolean=false;
  startPage:string=" ";
  type:number=-1;
  flag:boolean=false;
  previewImage= false;
  ShowMask =false;
  currentlightBoxImage:Products=this.ArrP[0];
  currentIndex=0;
  controls=true;
  totalimageCount=0;
  page=0;
  limit=3;
  ngOnInit(): void {
    this.totalimageCount=this.ArrP.length;
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
    //this.getAll();
     this.getAlls();
  }
 //ImgUrl = `data:image/png;base64,${{this.inspectionDetails.reportImage}}`;
  // getAll(){
  //   if(this.old){
  //   this.product.AllProdact(this.type).subscribe(s=>{
  //     this.ArrP=s, 
  //   console.log(this.ArrP)}
  //   ,e=>{console.log(e)})
  //   }
  //   else{
  //   this.product.AllOldProdacts(this.type).subscribe(s=>{this.ArrP=s, 
  //     console.log(this.ArrP)}
  //     ,e=>{console.log(e)})
  //   }
  //   this.old=!this.old;
  //  }
   getAlls(){
    if(this.old){
    this.product.AllProdacts(this.type,this.page,this.limit).subscribe(s=>{
      this.ArrP=s, 
    console.log(this.ArrP)}
    ,e=>{console.log(e)})
    }
    else{
    this.product.AllOldProdacts(this.type,this.page,this.limit).subscribe(s=>{this.ArrP=s, 
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

    onPreviewImage(index:number):void{
      console.log(index);
      this.ShowMask=true;
      this.previewImage=true;
      this.currentIndex=index;
      this.currentlightBoxImage=this.ArrP[index];
      console.log( this.currentlightBoxImage=this.ArrP[index])
   }
   onAnimationEnd(event:AnimationEvent){
    if(event.toState==='void'){
      this.ShowMask=false;
    }
   }
   onClosePreview(){
    this.previewImage=false;
   }

next():void{
this.currentIndex =this.currentIndex+ 1;
console.log(this.currentIndex);
if(this.currentIndex>this.ArrP.length-1){
this.currentIndex=0;
}
this.currentlightBoxImage=this.ArrP[this.currentIndex];
console.log(this.currentlightBoxImage=this.ArrP[this.currentIndex])
}
prev():void{
  this.currentIndex=this.currentIndex-1;
  console.log(this.currentIndex);
  if(this.currentIndex<0){
    this.currentIndex=this.ArrP.length-1;
  }
  this.currentlightBoxImage=this.ArrP[this.currentIndex];
  console.log(this.currentlightBoxImage=this.ArrP[this.currentIndex])
  }

  constructor(private product:ProductService,private user:UserService,private route:Router ) { }

}
