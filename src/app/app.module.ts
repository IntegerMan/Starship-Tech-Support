import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LcarsModule} from './lcars/lcars.module';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import {MetaReducer, StoreModule} from '@ngrx/store';
import {ticketsReducer} from './tickets/TicketsReducer';
import { TicketsListPageComponent } from './tickets/tickets-list-page/tickets-list-page.component';
import {environment} from '../environments/environment';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {storeFreeze} from 'ngrx-store-freeze';

export const metaReducers: MetaReducer[] = environment.production
  ? []
  : [storeFreeze];

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
    StoreModule.forRoot({ tickets: ticketsReducer }, {metaReducers}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
