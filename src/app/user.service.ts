import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './Models/User ';
import { Mail } from './Models/Mail';
import { AdminstarComponent } from './adminstar/adminstar.component';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {



  private isUserAdmin: boolean = false;
  isUserAdminObserv = new EventEmitter<boolean>();
  constructor(private Http: HttpClient) {
    this.isUserAdminObserv.subscribe(x => this.isUserAdmin = x);
  }
  getIsUserAdmin() {
    return this.isUserAdmin;
  }
  setUserAdmin(isuser: boolean) {
    this.isUserAdminObserv.emit(isuser)
  }
  AllUser() {
    return this.Http.get<User[]>("https://localhost:44381/api/User/getAllUsers");

  }
  sendEmail(m: Mail) {
    return this.Http.post<string>("https://localhost:44381/api/Email/emailsend", m);
  }
  EnterUser(u: User) {
    return this.Http.post<User>("https://localhost:44381/api/User/SetUser", u)
  }
  // EnterAdmin(admin:AdminstarComponent){
  //   return this.Http.post<AdminstarComponent>("https://localhost:44381/api/Rols/setAdmin",admin)
  // }
  UserAdmin(admin: AdminstarComponent) {
    console.log(admin)
    return this.Http.post<boolean>("https://localhost:44381/api/User/UserAdmin", admin)
  }
}
