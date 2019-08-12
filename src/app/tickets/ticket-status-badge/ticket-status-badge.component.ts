import {Component, Input, OnInit} from '@angular/core';
import {WorkItemStatus} from '../../../Core/Models/WorkItems/WorkItemStatus';

@Component({
  selector: 'ssit-ticket-status-badge',
  templateUrl: './ticket-status-badge.component.html',
  styleUrls: ['./ticket-status-badge.component.styl']
})
export class TicketStatusBadgeComponent implements OnInit {

  @Input()
  public status: WorkItemStatus;

  constructor() { }

  ngOnInit() {
  }

  public getClass(status: WorkItemStatus): string {
    switch (status) {
      case WorkItemStatus.new:
        return 'badge-light';
      case WorkItemStatus.readyForWork:
        return 'badge-secondary';
      case WorkItemStatus.inProgress:
      case WorkItemStatus.readyForReview:
      case WorkItemStatus.readyForTesting:
        return 'badge-primary';
      case WorkItemStatus.readyForRelease:
        return 'badge-info';
      case WorkItemStatus.released:
        return 'badge-success';
      default:
        throw Error('Unknown status code in getClass: ' + status);
    }
  }

  getStatusText(status: WorkItemStatus): string {
      switch (status) {
        case WorkItemStatus.new:
          return 'New';
        case WorkItemStatus.readyForWork:
          return 'Ready';
        case WorkItemStatus.inProgress:
          return 'In Progress';
        case WorkItemStatus.readyForReview:
          return 'Ready for Review';
        case WorkItemStatus.readyForTesting:
          return 'Ready for Testing';
        case WorkItemStatus.readyForRelease:
          return 'Ready for Release';
        case WorkItemStatus.released:
          return 'Released';
        default:
          throw Error('Unknown status code in getStatusText: ' + status);
      }
    }
}
