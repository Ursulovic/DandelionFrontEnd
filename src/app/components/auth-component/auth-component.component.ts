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
    console.log(this.token);
    this.authService.setToken(this.token);
  }

  removeToken() {
    this.authService.removeToken();
  }

}
