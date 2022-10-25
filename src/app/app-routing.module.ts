import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthComponentComponent} from "./components/auth-component/auth-component.component";
import {TextSimilarityComponent} from "./components/text-similarity/text-similarity.component";
import {AuthGuard} from "./guards/auth.guard";
import {DetectLangComponent} from "./components/detect-lang/detect-lang.component";
import {EntityExtractionComponent} from "./components/entity-extraction/entity-extraction.component";
import {SentimentAnalysisComponent} from "./components/sentiment-analysis/sentiment-analysis.component";
import {HistoryComponent} from "./components/history/history.component";

const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponentComponent
  },
  {
    path: 'textsimilarity',
    component: TextSimilarityComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'detectLanguage',
    component: DetectLangComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'entityextraction',
    component: EntityExtractionComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'sentimentanalysis',
    component: SentimentAnalysisComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'history',
    component: HistoryComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
