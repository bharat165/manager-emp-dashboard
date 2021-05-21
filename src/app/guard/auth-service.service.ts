import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  public loggedIn = new Subject<boolean>();
  get isLoggedInCheck() {
   return this.loggedIn.asObservable();
  }

  constructor() { }


  getIsLoggedInDetails(value:boolean) {
    this.loggedIn.next(value);
  }

  //Set Token to localstorage
  setToken(token: string) {
    localStorage.setItem("LoggedInUser", token)
  }

  //Get Token from localstorage
  getToken() {
    return localStorage.getItem("LoggedInUser")
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  //Remove item/key from localstorage
  logout() {
    localStorage.removeItem("LoggedInUser");
  }
}
