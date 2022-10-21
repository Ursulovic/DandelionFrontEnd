import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private token : string;

  constructor() {
    this.token = '';
  }

  getToken(): string {
    return this.token;
  }

  setToken(token: string) : void {
    this.token = token;
    localStorage.setItem("token", this.token);
  }

  removeToken() : void {
    this.token = '';
    localStorage.removeItem('token');
  }


}
