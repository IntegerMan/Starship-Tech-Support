import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {TicketsListPageComponent} from './tickets/tickets-list-page/tickets-list-page.component';
import {CrewPageComponent} from './crew/crew-page/crew-page.component';
import {PoliciesPageComponent} from './crew/policies-page/policies-page.component';
import {SystemsListComponent} from './engineering/systems-list/systems-list.component';
import {NotImplementedPageComponent} from './ui/not-implemented-page/not-implemented-page.component';
import {TicketDetailsPageComponent} from './tickets/ticket-details-page/ticket-details-page.component';
import {TicketLookupService} from './tickets/ticket-lookup.service';
import {WorkItem} from '../Core/Models/WorkItems/WorkItem';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'ops/work', component: TicketsListPageComponent },
  { path: 'ops/work/:id', component: TicketDetailsPageComponent },
  { path: 'crew', component: CrewPageComponent, pathMatch: 'full' },
  { path: 'crew/policies', component: PoliciesPageComponent },
  { path: 'engineering/systems', component: SystemsListComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotImplementedPageComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
