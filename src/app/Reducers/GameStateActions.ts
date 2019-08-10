import {createAction, props} from '@ngrx/store';
import {WorkItem} from '../../Core/Models/WorkItems/WorkItem';

export const resetAction = createAction('Reset');
export const closeTicketAction = createAction('Work Items / Close', props<{ workItem: WorkItem }>());
export const beginShiftAction = createAction('Begin Shift');
