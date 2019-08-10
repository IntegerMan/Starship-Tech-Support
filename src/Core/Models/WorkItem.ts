import {WorkItemType} from './WorkItemType';

export class WorkItem {

  constructor(title: string, workItemId: number, type: WorkItemType, systemId: number) {
    this.title = title;
    this.id = workItemId;
    this.systemId = systemId;
    this.type = type;
  }

  public id: number;
  public title: string;
  public assignedCrewId: number = 0;
  public systemId: number;
  public type: WorkItemType;
}
