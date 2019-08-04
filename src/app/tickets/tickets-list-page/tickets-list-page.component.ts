import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {TicketsState} from '../TicketsState';
import {closeTicketAction, getClosedTicketsCount, getOpenTickets} from '../TicketsReducer';
import {Ticket} from '../Ticket';

@Component({
  selector: 'ssit-tickets-list-page',
  templateUrl: './tickets-list-page.component.html',
  styleUrls: ['./tickets-list-page.component.styl']
})
export class TicketsListPageComponent implements OnInit {
  public closedCount$: Observable<number>;
  public tickets$: Observable<Ticket[]>;

  constructor(private store: Store<TicketsState>) {
  }

  ngOnInit(): void {
    this.tickets$ = this.store.select(getOpenTickets);
    this.closedCount$ = this.store.select(getClosedTicketsCount);
  }

  onDeleteClick(ticket: Ticket): void {
    this.store.dispatch(closeTicketAction(ticket));
  }
}
