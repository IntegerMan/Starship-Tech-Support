import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LcarsModule} from './lcars/lcars.module';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import {MetaReducer, StoreModule} from '@ngrx/store';
import {gameStateReducer} from './Reducers/GameStateReducer';
import { TicketsListPageComponent } from './tickets/tickets-list-page/tickets-list-page.component';
import {environment} from '../environments/environment';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {storeFreeze} from 'ngrx-store-freeze';
import { RootSidebarComponent } from './root-sidebar/root-sidebar.component';
import {GameStateStore} from './Reducers/GameStateStore';
import {CrewPageComponent} from './crew/crew-page/crew-page.component';
import { SchedulePageComponent } from './crew/schedule-page/schedule-page.component';
import { PoliciesPageComponent } from './crew/policies-page/policies-page.component';
import { SystemsPageComponent } from './systems/systems-page/systems-page.component';

export const metaReducers: MetaReducer[] = environment.production
  ? []
  : [storeFreeze];

@NgModule({
  declarations: [
    AppComponent,
    CrewPageComponent,
    HomePageComponent,
    NotFoundPageComponent,
    TicketsListPageComponent,
    RootSidebarComponent,
    SchedulePageComponent,
    PoliciesPageComponent,
    SystemsPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LcarsModule,
    StoreModule.forRoot({ game: gameStateReducer }, {metaReducers}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [GameStateStore],
  bootstrap: [AppComponent]
})
export class AppModule { }
