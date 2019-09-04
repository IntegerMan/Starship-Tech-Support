import {Action, createReducer, on, State} from '@ngrx/store';
import {beginShiftAction, changePriorityAction, resetAction} from './GameStateActions';
import {GameSimulator} from '../../Core/Simulator/GameSimulator';
import {ArrayHelpers} from '../../helpers/ArrayHelpers';
import {CrewSkill} from '../../Core/Models/crew/CrewSkill';
import {CrewMember} from '../../Core/Models/crew/CrewMember';

const gameReducer = createReducer(GameSimulator.buildDefaultState(),
  on(resetAction, () => GameSimulator.buildDefaultState()),
  on(beginShiftAction, state => GameSimulator.simulate(state, 1)),
  on(changePriorityAction, (state, {crewId, skill, newPriority}) => {

    const newState = {
      ... state,
      messages: [],
      crew: []
    };

    for (const crew of state.crew) {
      if (crew.id === crewId) {
        const skills: CrewSkill[] = [];
        for (const crewSkill of crew.skills) {
          if (crewSkill.skill === skill) {
            skills.push({... crewSkill, priority: newPriority});
          } else {
            skills.push({... crewSkill});
          }
        }

        const clonedCrew: CrewMember = crew.clone();
        clonedCrew.skills = skills;

        newState.crew.push(clonedCrew);
      } else {
        newState.crew.push({...crew});
      }
    }

    return newState;
  }),
);

export function gameStateReducer(state: any, action: Action) {
  return gameReducer(state, action);
}
