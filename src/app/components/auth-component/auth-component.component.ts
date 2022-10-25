import { Component, OnInit } from '@angular/core';
import {AuthServiceService} from "../../services/auth-service.service";

@Component({
  selector: 'app-auth-component',
  templateUrl: './auth-component.component.html',
  styleUrls: ['./auth-component.component.css']
})
export class AuthComponentComponent implements OnInit {

  token: string;

  constructor(private authService: AuthServiceService) {
    this.token = '';
  }

  ngOnInit(): void {
    console.log("token: ", this.authService.getToken());
  }

  setToken() {
    if (this.token != '') {
      console.log(this.token);
      this.authService.setToken(this.token);
    }
    else {
      alert('You must enter non-empty token');
    }
  }

  removeToken() {
    this.authService.removeToken();
  }
  readLocalStorageValue(): boolean {
    return localStorage.getItem('token') == '';
  }

}
