import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthComponentComponent} from "./components/auth-component/auth-component.component";
import {TextSimilarityComponent} from "./components/text-similarity/text-similarity.component";

const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponentComponent
  },
  {
    path: 'textsimilarity',
    component: TextSimilarityComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
