import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {LangDetectionResponse} from "../model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {HistoryService} from "./history.service";

@Injectable({
  providedIn: 'root'
})
export class LangDetectionService {


  constructor(private httpClient: HttpClient, private historyService: HistoryService) {
  }

  detectLanguage(text: string, clean: boolean): Observable<LangDetectionResponse> {
    console.log(`${environment.postApiLangDetection}/?text=${text}&clean=${clean}&token=${localStorage.getItem('token')}`);
    this.historyService.addNew(new Date, 'GET', `${environment.postApiLangDetection}/?text=${text}&clean=${clean}&token=${localStorage.getItem('token')}`);
    return this.httpClient.get<LangDetectionResponse>(`${environment.postApiLangDetection}/?text=${text}&clean=${clean}&token=${localStorage.getItem('token')}`);
  }

}
