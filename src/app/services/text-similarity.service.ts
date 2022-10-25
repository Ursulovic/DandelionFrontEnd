import { Injectable } from '@angular/core';
import {environment } from '../../environments/environment';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";
import {TextSimilarityResponse} from "../model";
import {HistoryService} from "./history.service";


@Injectable({
  providedIn: 'root'
})
export class TextSimilarityService {





  constructor(private httpClient: HttpClient, private historyService: HistoryService) {
  }

  compareText(text1: string, text2: string) : Observable<TextSimilarityResponse> {
    let url = `${environment.postApiSimilarity}/?text1=${text1}&text2=${text2}&token=${localStorage.getItem('token')}`;
    console.log(url);
    this.historyService.addNew(new Date, 'GET', url);

    return this.httpClient.get<TextSimilarityResponse>(url);
  }



}
