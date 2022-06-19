import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Suppiler } from './Models/Suppiler '

@Injectable({
  providedIn: 'root'
})
export class SuppilerService {

  constructor(private Http:HttpClient) { }
  AllSupiilers(){
    return this.Http.get<Suppiler[]>("https://localhost:44381/api/Suppiler/GetAllSuplier");

  }

  EnterSuppiler(s:Suppiler){
    return this.Http.post<Suppiler>("https://localhost:44381/api/Suppiler/SetSuppiler",s)  
    }
}
