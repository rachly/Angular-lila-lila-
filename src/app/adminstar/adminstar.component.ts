import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-adminstar',
  templateUrl: './adminstar.component.html',
  styleUrls: ['./adminstar.component.css']
})
export class AdminstarComponent implements OnInit {

  constructor(private user:UserService) { }
  userAdmin:boolean=false;
  myADmin:FormGroup=new FormGroup({});
  ngOnInit(): void {

    this.myADmin=new FormGroup({
      "Mail":new FormControl("",Validators.required),
      "Password":new FormControl("",Validators.required)
     })
  }
 UserAdmin(){
   this.user.UserAdmin(this.myADmin.value).subscribe(
     s=>{
     
    this.user.setUserAdmin(s)
      console.log(s)
    alert(s)},e=>{
      console.log(e)
      alert(e)
     }
   )
  }
 
  exit(){
    console.log("exit")
    alert("exit")
    this.userAdmin=false;
  }
}
