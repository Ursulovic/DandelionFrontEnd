import { Component, OnInit } from '@angular/core';
import {EntityExtractionService} from "../../services/entity-extraction.service";
import {EntityExtractionResponse} from "../../model";

@Component({
  selector: 'app-entity-extraction',
  templateUrl: './entity-extraction.component.html',
  styleUrls: ['./entity-extraction.component.css']
})
export class EntityExtractionComponent implements OnInit {

  text: string;
  min_confidence: number;
  lang: string;

  //includes
  image: boolean;
  categories: boolean;
  abstract: boolean;

  response: EntityExtractionResponse = {
    lang: '',
    time: -1,
    timestamp: '',
    annotations: []
  }

  constructor(private service : EntityExtractionService) {
    this.text = '';
    this.min_confidence = 0;
    this.lang = '';

    this.image = false;
    this.categories = false;
    this.abstract = false;

  }

  ngOnInit(): void {
  }

  extractEntities():void {
    if (!this.image && !this.abstract && !this.categories) {
      alert('You must select atleast one category (abstract image or categories)');
    }
    else if (this.text != '') {
      if (this.text != '') {
        let arr = [];
        if (this.image)
          arr.push('image');
        if (this.categories)
          arr.push('categories');
        if (this.abstract)
          arr.push('abstract');
        this.service.extractEntities(this.text, this.min_confidence, arr).subscribe(res => {
          this.response = res;
          console.log(res);
        })
      }
    }
    else {
      alert("Text cannot be empty!");
    }
  }

}
