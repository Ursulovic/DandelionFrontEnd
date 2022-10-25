import { Component, OnInit } from '@angular/core';
import {SentimentAnalysisService} from "../../services/sentiment-analysis.service";
import {Sentiment, SentimentAnalysisResponse} from "../../model";
import {HistoryService} from "../../services/history.service";

@Component({
  selector: 'app-sentiment-analysis',
  templateUrl: './sentiment-analysis.component.html',
  styleUrls: ['./sentiment-analysis.component.css']
})
export class SentimentAnalysisComponent implements OnInit {

  text: string;
  lang: string;
  color: string;

  COLOR_RED: number[] = [255,0,0];
  COLOR_GREEN: number[]= [0,255,0];

  public options = [
    {value: 'en', name:  'English'},
    {value: 'it', name: 'Italian'},
    {value: 'auto', name: 'auto'}
  ]


  sentiment: Sentiment = {
    type: '',
    score: 0
  }

  response: SentimentAnalysisResponse = {
    time: -1,
    lang: '',
    timestamp: '',
    sentiment: this.sentiment
  }


  constructor(private service: SentimentAnalysisService) {
    this.text = '';
    this.lang = '';
    this.color = '';
  }

  ngOnInit(): void {
  }

  analyse():void {
    if (this.lang != '') {
      if (this.text != '') {
        this.service.analyse(this.text, this.lang).subscribe(res => {
          this.response = res;
          this.color = this.service.interpopulation(this.COLOR_RED, this.COLOR_GREEN, this.response.sentiment.score);
        })
      } else {
        alert('Text cannot be empty!');
      }
    }
    else {
      alert('You must select a language!');
    }
  }

}
