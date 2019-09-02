import {WorkItemType} from './WorkItemType';
import {WorkItemStatus} from './WorkItemStatus';
import {Department} from '../Department';

export class WorkItem {

  constructor(public title: string, public id: number, public department: Department) {
  }

  public assignedCrewId: number = 0;
  public createdByCrewId: number = 0;
  public systemId: number = 0;
  public type: WorkItemType = WorkItemType.incident;
  public status: WorkItemStatus = WorkItemStatus.new;
}
