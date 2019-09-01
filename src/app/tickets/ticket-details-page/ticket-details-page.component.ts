import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WorkItem} from '../../../Core/Models/WorkItems/WorkItem';
import {Observable, Subscription} from 'rxjs';
import {GameState} from '../../../Core/Models/GameState';
import {GameStateStore} from '../../Reducers/GameStateStore';
import {select} from '@ngrx/store';
import {TicketViewModel} from '../ticket-view-model';

@Component({
  selector: 'ssit-ticket-details-page',
  templateUrl: './ticket-details-page.component.html',
  styleUrls: ['./ticket-details-page.component.styl']
})
export class TicketDetailsPageComponent implements OnInit, OnDestroy {

  private ticket$: Observable<TicketViewModel>;

  private sub: Subscription | null = null;

  constructor(private state: GameStateStore, private route: ActivatedRoute) {
    console.debug('Constructed');
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = +params['id'];
      this.ticket$ = this.state.select(this.state.getTicketById(id));
    });
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
      this.sub = null;
    }
  }

}
