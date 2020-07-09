import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppareilViewComponent} from './appareil-view/appareil-view.component';
import {AuthComponent} from './auth/auth.component';
import {SingleAppareilComponent} from './single-appareil/single-appareil.component';

const routes: Routes = [
  { path: 'appareils', component: AppareilViewComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'appareils/:id', component: SingleAppareilComponent },
  { path: '', component: AppareilViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
