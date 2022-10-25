import { Component, OnInit } from '@angular/core';
import {LangDetectionService} from "../../services/lang-detection.service";
import {DetectedLang, LangDetectionResponse} from "../../model";

@Component({
  selector: 'app-detect-lang',
  templateUrl: './detect-lang.component.html',
  styleUrls: ['./detect-lang.component.css']
})
export class DetectLangComponent implements OnInit {

  text: string;
  clean: boolean;
  response : LangDetectionResponse = {
    time: -1,
    timestamp: '',
    detectedLangs: []
  }


  constructor(private langDetect: LangDetectionService ) {
    this.text = '';
    this.clean = false;
  }

  ngOnInit(): void {
  }

  detectLang(): void {
    if (this.text != '') {
      this.langDetect.detectLanguage(this.text, this.clean).subscribe(res => {
        this.response = res;
      })
    }
    else {
      alert('Text cannot be empty!');
    }
  }

}
