import {WorkItemType} from './WorkItemType';

export interface DisplayableWorkItem {
  id: number;
  title: string;
  assignedCrewId: number;
  assignedCrewName: string | null;
  systemId: number;
  type: WorkItemType;
}
