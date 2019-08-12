import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {TicketViewModel} from '../../tickets/ticket-view-model';
import {GameStateStore} from '../../Reducers/GameStateStore';
import {ShipSystem} from '../../../Core/Models/systems/ShipSystem';

@Component({
  selector: 'ssit-systems-list',
  templateUrl: './systems-list.component.html',
  styleUrls: ['./systems-list.component.styl']
})
export class SystemsListComponent implements OnInit {
  public systems$: Observable<ShipSystem[]>;

  constructor(private store: GameStateStore) {
  }

  ngOnInit(): void {
    this.systems$ = this.store.select(this.store.getSystems);
  }
}
