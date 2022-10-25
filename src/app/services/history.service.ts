import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  currentHistory: string[] = [];

  constructor() {
    console.log('It\'s Alive!!!!!!');
  }

  addNew(date: Date, method: string, url: string): void {
    let s = `${date.toLocaleString()} ${method} ${url}`;
    this.currentHistory.push(s);
    console.log(this.currentHistory);
  }


}
