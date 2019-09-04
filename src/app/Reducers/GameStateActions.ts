import {createAction, props} from '@ngrx/store';
import {Skill} from '../../Core/Models/skill';

export const resetAction = createAction('Reset');
export const beginShiftAction = createAction('Begin Shift');
export const changePriorityAction = createAction('Change Priority', props<{crewId: number; skill: Skill; newPriority: number;}>());
