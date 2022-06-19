import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TypeProduct } from './Models/TypeProduct ';

@Injectable({
  providedIn: 'root'
})
export class TypesService {

  constructor(private Http:HttpClient) { }
  AllTypes(){
    return this.Http.get<TypeProduct[]>("https://localhost:44381/api/TypeProduct/GetAllTypesP");

  }
  EnterTypes(t:TypeProduct){
    return this.Http.post<TypeProduct>("https://localhost:44381/api/TypeProduct/SetTypes",t)  
    }
}
