import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponentComponent } from './components/auth-component/auth-component.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { TextSimilarityComponent } from './components/text-similarity/text-similarity.component';
import { DetectLangComponent } from './components/detect-lang/detect-lang.component';
import { EntityExtractionComponent } from './components/entity-extraction/entity-extraction.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider'
import {MdbCollapseModule} from 'mdb-angular-ui-kit/collapse';
import { SentimentAnalysisComponent } from './components/sentiment-analysis/sentiment-analysis.component';
import { HistoryComponent } from './components/history/history.component';
import { WelcomeComponent } from './components/welcome/welcome.component'

// import { MdbCollapseModule } from '@am0mdb-angular-ui-kit/collapse';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponentComponent,
    TextSimilarityComponent,
    DetectLangComponent,
    EntityExtractionComponent,
    SentimentAnalysisComponent,
    HistoryComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MdbCollapseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
