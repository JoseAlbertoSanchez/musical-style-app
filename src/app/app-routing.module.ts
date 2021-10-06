import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MusicalStyleComponent} from "./components/musical-style/musical-style.component";
import {HomeComponent} from "./components/home/home.component";
import {SurveyComponent} from "./components/survey/survey.component";
import {SurveyResultsComponent} from "./components/survey-results/survey-results.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'musical-style', component: MusicalStyleComponent},
  {path: 'survey', component: SurveyComponent},
  {path: 'survey-results', component: SurveyResultsComponent},
  // {path: 'login', loadChildren: './pages/login/login.module#LoginPageModule'},
  // {path: 'callback', loadChildren: './auth/auth-callback/auth-callback.module#AuthCallbackPageModule'},
  // {path: 'callback-logout', loadChildren: './auth/end-session/end-session.module#EndSessionPageModule'},
  // {path: 'logout', loadChildren: './auth/end-session/end-session.module#EndSessionPageModule'},
  // {path: 'accessdenied', redirectTo: '', pathMatch: 'full'},
  // {
  //   path: 'partner-menu',
  //   loadChildren: () => import('./pages/test/partner-menu/partner-menu.module').then(m => m.PartnerMenuPageModule)
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
