import {WorkItemType} from './WorkItemType';
import {WorkItemStatus} from './WorkItemStatus';

export class WorkItem {

  constructor(public title: string, public id: number) {
  }

  public assignedCrewId: number = 0;
  public createdByCrewId: number = 0;
  public systemId: number = 0;
  public type: WorkItemType = WorkItemType.incident;
  public status: WorkItemStatus = WorkItemStatus.new;
}
