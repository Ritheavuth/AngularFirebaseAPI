import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RecommenderComponent } from './recommender/recommender.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  // {path: '', redirectTo: 'recommender', pathMatch: 'full'},
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    // canActivate: [AuthGuardService],
    component: RecommenderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuardService]
})
export class AppRoutingModule { }
