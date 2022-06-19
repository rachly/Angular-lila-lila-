import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  userAdmin:boolean=false;
  myADminE:FormGroup=new FormGroup({});
  constructor(private user:UserService ) { }
  ngOnInit(): void {
  
    
  }
 
 
  
   }
  

