import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {TicketsListPageComponent} from './tickets/tickets-list-page/tickets-list-page.component';
import {CrewPageComponent} from './crew/crew-page/crew-page.component';
import {PoliciesPageComponent} from './crew/policies-page/policies-page.component';
import {SystemsListComponent} from './engineering/systems-list/systems-list.component';
import {NotImplementedPageComponent} from './ui/not-implemented-page/not-implemented-page.component';
import {TicketDetailsPageComponent} from './tickets/ticket-details-page/ticket-details-page.component';
import {CrewDetailsPageComponent} from './crew/crew-details-page/crew-details-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'ops/work', component: TicketsListPageComponent },
  { path: 'ops/work/:id', component: TicketDetailsPageComponent },
  { path: 'crew', component: CrewPageComponent, pathMatch: 'full' },
  { path: 'crew/policies', component: PoliciesPageComponent, pathMatch: 'full' },
  { path: 'crew/management', component: NotImplementedPageComponent, pathMatch: 'full' },
  { path: 'crew/member/:id', component: CrewDetailsPageComponent, pathMatch: 'full' },
  { path: 'engineering/systems', component: SystemsListComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotImplementedPageComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {enableTracing: false}),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
