import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { MovieService } from './services/movie.service';


import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ShowflightComponent } from './components/showflight/showflight.component';
import { FlightService } from './services/flight.service';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,

    HomeComponent,

    ShowflightComponent,

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [HomeComponent, FlightService],
  bootstrap: [AppComponent]
})
export class AppModule { }
