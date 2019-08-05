import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Ticket} from '../../../Core/Models/Ticket';
import {GameStateStore} from '../../Reducers/GameStateStore';
import {closeTicketAction} from '../../Reducers/GameStateActions';

@Component({
  selector: 'ssit-tickets-list-page',
  templateUrl: './tickets-list-page.component.html',
  styleUrls: ['./tickets-list-page.component.styl']
})
export class TicketsListPageComponent implements OnInit {
  public closedCount$: Observable<number>;
  public tickets$: Observable<Ticket[]>;

  constructor(private store: GameStateStore) {
  }

  ngOnInit(): void {
    this.tickets$ = this.store.select(this.store.getOpenTickets);
    this.closedCount$ = this.store.select(this.store.getClosedTicketsCount);
  }

  onDeleteClick(ticket: Ticket): void {
    this.store.dispatch(closeTicketAction(ticket));
  }
}
