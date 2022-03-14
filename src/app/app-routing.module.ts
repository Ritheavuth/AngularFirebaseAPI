import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RecommenderComponent } from './recommender/recommender.component';

const routes: Routes = [
  // {path: '', redirectTo: 'recommender', pathMatch: 'full'},
  {
    path: '/login',
    component: LoginComponent
  },
  {path: '', component: RecommenderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
