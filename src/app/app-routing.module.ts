import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecommenderComponent } from './recommender/recommender.component';

const routes: Routes = [
  // {path: '', redirectTo: 'recommender', pathMatch: 'full'},
  {path: '', component: RecommenderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
