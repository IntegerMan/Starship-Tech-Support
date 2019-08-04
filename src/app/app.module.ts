import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LcarsModule} from './lcars/lcars.module';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { StoreModule } from '@ngrx/store';
import {ticketsReducer} from './tickets/TicketsReducer';
import { TicketsListPageComponent } from './tickets/tickets-list-page/tickets-list-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NotFoundPageComponent,
    TicketsListPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LcarsModule,
    StoreModule.forRoot({ tickets: ticketsReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
