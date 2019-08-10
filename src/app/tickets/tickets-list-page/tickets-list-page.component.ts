import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {GameStateStore} from '../../Reducers/GameStateStore';
import {DisplayableWorkItem} from '../../../Core/Models/WorkItems/displayable-work.item';

@Component({
  selector: 'ssit-tickets-list-page',
  templateUrl: './tickets-list-page.component.html',
  styleUrls: ['./tickets-list-page.component.styl']
})
export class TicketsListPageComponent implements OnInit {
  public closedCount$: Observable<number>;
  public tickets$: Observable<DisplayableWorkItem[]>;

  constructor(private store: GameStateStore) {
  }

  ngOnInit(): void {
    this.tickets$ = this.store.select(this.store.getOpenTickets);
    this.closedCount$ = this.store.select(this.store.getClosedTicketsCount);
  }

  getAssignmentText(wi: DisplayableWorkItem): string {
    if (wi.assignedCrewName) {
      return `Assigned to ${wi.assignedCrewName}`;
    }
    else {
      return 'Unassigned';
    }
  }
}
