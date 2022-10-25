import { Component, OnInit } from '@angular/core';
import {TextSimilarityService} from "../../services/text-similarity.service";
import {TextSimilarityResponse} from "../../model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-text-similarity',
  templateUrl: './text-similarity.component.html',
  styleUrls: ['./text-similarity.component.css']
})
export class TextSimilarityComponent implements OnInit {

  text1: string;
  text2: string;
  response : TextSimilarityResponse = {
    time: 0,
    similarity: 0,
    lang: '',
    langConfidence: 0,
    timestamp: ''
  }


  constructor(private textService: TextSimilarityService) {
    this.text1 = '';
    this.text2 = '';

  }

  ngOnInit(): void {
  }

  compareText(): void {
    if (this.text1 != '' && this.text2 != '') {
      this.textService.compareText(this.text1, this.text2).subscribe(res => {
        this.response = res;
        console.log(this.response);
      })
    }
    else {
      alert("Text1 and text2 are required!");
    }

  }

}
