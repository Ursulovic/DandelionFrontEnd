import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {SentimentAnalysisResponse} from "../model";
import {HistoryService} from "./history.service";


@Injectable({
  providedIn: 'root'
})
export class SentimentAnalysisService {

  constructor(private httpClient: HttpClient, private historyService: HistoryService) { }

  analyse (text: string, lang: string): Observable<SentimentAnalysisResponse> {
    let url = `${environment.postApiSentimentAnalysis}/?text=${text}&lang=${lang}&token=${localStorage.getItem('token')}`;
    console.log(url);
    this.historyService.addNew(new Date(), 'GET', url);
    return this.httpClient.get<SentimentAnalysisResponse>(url);
  }

  interpopulation(color1: number[], color2: number[], t: number): string {


    let scaled_t = (t + 1) / 2;

    let res = [0,0,0];
    for (let i=0; i <3; i++) {
      res[i] = color1[i] + (color2[i] - color1[i]) * scaled_t;
    }

    return 'rgb(' + res.join(', ') + ')';

  }


}
