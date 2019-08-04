import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {TicketsState} from '../TicketsState';

@Component({
  selector: 'ssit-tickets-list-page',
  templateUrl: './tickets-list-page.component.html',
  styleUrls: ['./tickets-list-page.component.styl']
})
export class TicketsListPageComponent implements OnInit {
  public closedCount$: Observable<number>;
  // public tickets$: Observable<string[]>;

  constructor(private store: Store<TicketsState>) {
    // this.tickets$ = store.pipe(select('tickets'));
    this.closedCount$ = store.pipe(select('tickets'));
  }

  ngOnInit() {
  }

}
