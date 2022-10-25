import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {EntityExtractionResponse} from "../model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {HistoryService} from "./history.service";



@Injectable({
  providedIn: 'root'
})
export class EntityExtractionService {

  constructor(private httpClient: HttpClient, private historyService: HistoryService) { }

  extractEntities(text: string, min_confidence: number, include: string[]): Observable<EntityExtractionResponse> {
    let url = `${environment.postApiEntityExtraction}/?text=${text}&include=${include}&token=${localStorage.getItem('token')}`;
    console.log(url);
    this.historyService.addNew(new Date(), 'GET', url);
    return this.httpClient.get<EntityExtractionResponse>(url);
  }
}
