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

  setToken(token: string) {
    localStorage.setItem("LoggedInUser", token)
  }

  getToken() {
    return localStorage.getItem("LoggedInUser")
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem("LoggedInUser");
  }
}
