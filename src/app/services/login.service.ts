import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _username;
  private _password;

  public get username() {
    return this._username;
  }
  public set username(value) {
    this._username = value;
  }

  public get password() {
    return this._password;
  }
  public set password(value) {
    this._password = value;
  }

  isLoggedIn() {
    if (this.username === '' || this.username === null || this.username === undefined) {
      return false;
    }
    return true;
  }
  constructor() { }
}
