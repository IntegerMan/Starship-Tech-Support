import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomePageComponent} from './home-page/home-page.component';
import {NotFoundPageComponent} from './ui/not-found-page/not-found-page.component';
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
import { DepartmentBadgeComponent } from './ui/department-badge/department-badge.component';
import {SystemsListComponent} from './engineering/systems-list/systems-list.component';
import { TicketStatusBadgeComponent } from './tickets/ticket-status-badge/ticket-status-badge.component';
import { NotImplementedPageComponent } from './ui/not-implemented-page/not-implemented-page.component';
import { TicketDetailsPageComponent } from './tickets/ticket-details-page/ticket-details-page.component';
import { CrewDetailsPageComponent } from './crew/crew-details-page/crew-details-page.component';
import { CrewLinkComponent } from './crew/crew-link/crew-link.component';
import { TicketsGridComponent } from './tickets/tickets-grid/tickets-grid.component';
import { PriorityPickerComponent } from './ui/priority-picker/priority-picker.component';
import { CrewListSidebarGroupComponent } from './crew/crew-list-sidebar-group/crew-list-sidebar-group.component';

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
    DepartmentBadgeComponent,
    SystemsListComponent,
    TicketStatusBadgeComponent,
    NotImplementedPageComponent,
    TicketDetailsPageComponent,
    CrewDetailsPageComponent,
    CrewLinkComponent,
    TicketsGridComponent,
    PriorityPickerComponent,
    CrewListSidebarGroupComponent,
  ],
  imports: [
    BrowserModule,
    // Features
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
  exports: [
    DepartmentBadgeComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
