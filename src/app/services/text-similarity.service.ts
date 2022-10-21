import { Injectable } from '@angular/core';
import {environment } from '../../environments/environment';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";
import {TextSimilarityResponse} from "../model";


@Injectable({
  providedIn: 'root'
})
export class TextSimilarityService {

  text1: string;
  text2: string;


  constructor(private httpClient: HttpClient) {
    this.text1 = '';
    this.text2 = '';
  }

  compareText(text1: string, text2: string) : Observable<TextSimilarityResponse> {
    console.log(`${environment.postApi}/?text1=${text1}&text2=${text2}&token=${localStorage.getItem('token')}`);
    return this.httpClient.get<TextSimilarityResponse>(`${environment.postApi}/?text1=${text1}&text2=${text2}&token=${localStorage.getItem('token')}`);
  }



}
