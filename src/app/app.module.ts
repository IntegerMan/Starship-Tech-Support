import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomePageComponent} from './home-page/home-page.component';
import {NotFoundPageComponent} from './not-found-page/not-found-page.component';
import {StoreModule} from '@ngrx/store';
import {gameStateReducer} from './Reducers/GameStateReducer';
import {TicketsListPageComponent} from './tickets/tickets-list-page/tickets-list-page.component';
import {environment} from '../environments/environment';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {GameStateStore} from './Reducers/GameStateStore';
import {CrewPageComponent} from './crew/crew-page/crew-page.component';
import {PoliciesPageComponent} from './crew/policies-page/policies-page.component';
import {routerReducer} from '@ngrx/router-store';
import { SidebarComponent } from './ui/sidebar/sidebar.component';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { SidebarItemComponent } from './ui/sidebar-item/sidebar-item.component';
import {EngineeringModule} from './engineering/engineering.module';

@NgModule({
  declarations: [
    AppComponent,
    CrewPageComponent,
    HomePageComponent,
    NotFoundPageComponent,
    TicketsListPageComponent,
    PoliciesPageComponent,
    SidebarComponent,
    NavbarComponent,
    SidebarItemComponent,
  ],
  imports: [
    BrowserModule,
    // Features
    EngineeringModule,
    // Other includes
    AppRoutingModule,
    StoreModule.forRoot({
      game: gameStateReducer,
      router: routerReducer,
    }, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: false,
        strictActionSerializability: false,
      }
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
/*
    StoreRouterConnectingModule.forRoot({
      routerState: RouterState.Minimal
    })
*/
  ],
  providers: [GameStateStore],
  bootstrap: [AppComponent]
})
export class AppModule { }
