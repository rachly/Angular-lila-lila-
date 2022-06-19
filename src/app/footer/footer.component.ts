import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators  , FormBuilder, AbstractControl, MinLengthValidator,} from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
// import Validation from './utils/validation';


// import { stringify } from 'querystring';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
   //this.ArrU=[];
   Mail:FormGroup=new FormGroup({});
   submitted = false;
   myUser:FormGroup=new FormGroup({});
  ngOnInit(): void {    
      // this.myUser=new FormGroup({
      //   "Id":new FormControl("",Validators.required),
      //   "FirstName":new FormControl("",Validators.required),
      //   "LastName":new FormControl("",Validators.required),
      //   "Mail":new FormControl("",Validators.required),
      //   "Phone":new FormControl("",Validators.required),
      //   "City":new FormControl("",Validators.required),
      //   "Address":new FormControl("",Validators.required),
      //   "Active":new FormControl("",Validators.required),
      //   "RolesId":new FormControl("",Validators.required),
      // })
      this.Mail=new FormGroup({
        "Id":new FormControl("",Validators.required),
        "NameSend":new FormControl("",[Validators.minLength(5),Validators.required]),
        "Phon":new FormControl("",Validators.compose([Validators.pattern("^[0-9]*$"),Validators.required,Validators.minLength(10), Validators.maxLength(10)])),
        // "Phon" :new FormControl(['', [ Validators.required,
        //   Validators.pattern("^[0-9]*$"),
        //   Validators.minLength(10), Validators.maxLength(10)]]
        // ),
        "Email1":new FormControl("",Validators.compose([Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'),Validators.required])),
        "subjectSend":new FormControl("",[Validators.required,Validators.maxLength(20)]),
        "massage":new FormControl("",Validators.required),
        
      })
  }
  constructor(public userService:UserService, private router:Router) { }
  enterUser(){
    this.userService.EnterUser(this.myUser.value).subscribe(
      s=>{console.log(s)},
      e=>{console.log(e)}
    )
  }
  sendEmail(){
    this.userService.sendEmail(this.Mail.value).subscribe(
      s=>{console.log(s),console.log("send");},
      e=>{console.log(e+"dont send")}
    )
  }
  onNavigate(){
    // your logic here.... like set the url 
    const url = 'https://www.facebook.com/%D7%9C%D7%99%D7%9C%D7%94-%D7%9C%D7%99%D7%9C%D7%94-100742032210707/';
    window.open(url, '_blank');
}
onNavigatew(){
  const url = 'https://wa.me/0527697000';
    window.open(url, '_blank');
}
onNavigatee(){
  const url = 'https://www.instagram.com/lila.lila.service/';
    window.open(url, '_blank');
}
//   onNavigate(){
//     window.open("https://www.facebook.com/%D7%9C%D7%99%D7%9C%D7%94-%D7%9C%D7%99%D7%9C%D7%94-100742032210707/", "_blank");
// }

        

}
