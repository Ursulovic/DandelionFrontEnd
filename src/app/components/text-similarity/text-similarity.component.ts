import { Component, OnInit } from '@angular/core';
import {TextSimilarityService} from "../../services/text-similarity.service";

@Component({
  selector: 'app-text-similarity',
  templateUrl: './text-similarity.component.html',
  styleUrls: ['./text-similarity.component.css']
})
export class TextSimilarityComponent implements OnInit {

  text1: string;
  text2: string;

  constructor(private textService: TextSimilarityService) {
    this.text1 = '';
    this.text2 = '';
  }

  ngOnInit(): void {
  }

}
