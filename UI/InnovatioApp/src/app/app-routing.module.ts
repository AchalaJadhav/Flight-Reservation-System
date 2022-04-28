import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ShowflightComponent } from './components/showflight/showflight.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'showflight', component: ShowflightComponent},
      
      
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

