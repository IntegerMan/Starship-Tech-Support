import {Component, Input, OnInit} from '@angular/core';
import {TicketViewModel} from '../ticket-view-model';

@Component({
  selector: 'ssit-tickets-grid',
  templateUrl: './tickets-grid.component.html',
  styleUrls: ['./tickets-grid.component.styl']
})
export class TicketsGridComponent implements OnInit {

  @Input()
  public tickets: TicketViewModel[] = [];

  @Input()
  public includeAssignedTo: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
