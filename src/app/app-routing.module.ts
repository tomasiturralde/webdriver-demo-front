import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {SecondScreenComponent} from "./second-screen/second-screen.component";

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'screen', component: SecondScreenComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
