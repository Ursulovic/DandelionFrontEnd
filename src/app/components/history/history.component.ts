import { Component, OnInit } from '@angular/core';
import {HistoryService} from "../../services/history.service";
import {History} from "../../model";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor( private service: HistoryService
  ) { }

  ngOnInit(): void {
  }

  getHistory(): string[] {
    return this.service.currentHistory;
  }




}
