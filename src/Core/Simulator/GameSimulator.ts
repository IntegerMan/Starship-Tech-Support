import {GameState} from '../Models/GameState';
import {GameTime} from '../Models/GameTime';
import {WorkItem} from '../Models/WorkItems/WorkItem';
import {WorkItemType} from '../Models/WorkItems/WorkItemType';
import {CrewMember} from '../Models/crew/CrewMember';
import {Gender} from '../Models/crew/Gender';
import {Department} from '../Models/Department';
import {Rank} from '../Models/crew/Rank';
import {CrewBehaviorTree} from './CrewBehaviorTree';
import {CrewContext} from './CrewContext';
import {ArrayHelpers} from '../../helpers/ArrayHelpers';

export class GameSimulator {

  private static _crewBehaviorTree: CrewBehaviorTree = new CrewBehaviorTree();

  public static simulate(state: GameState, elapsedTime: number): GameState {
    const newState = {
      ... state,
      time: state.time.increment(elapsedTime),
      messages: [],
      openTickets: ArrayHelpers.clone(state.openTickets)
    };

    for (const crewMember of newState.crew) {
      const crewContext: CrewContext = new CrewContext(newState, crewMember);
      GameSimulator._crewBehaviorTree.evaluate(crewContext);
    }

    return newState;
  }

  public static buildDefaultState(): GameState {
    return {
      openTickets: [
        new WorkItem('The Web Site is Down', 1),
        new WorkItem('The hovercraft is full of eels', 2)
      ],
      closedCount: 0,
      time: new GameTime(8, 4, 2422, 3, 20),
      crew: [
/*
        new CrewMember(1, 'Richard', 'Hendricks', Gender.male, Rank.pettyOfficer3rdClass, Department.command),
        new CrewMember(2, 'Dinesh', 'Chugtai', Gender.male, Rank.crewman, Department.engineering),
        new CrewMember(3, 'Bertram', 'Gilfoyle', Gender.male, Rank.crewman, Department.engineering),
        new CrewMember(4, 'Jared', 'Dunn', Gender.male, Rank.crewmanApprentice, Department.supply),
*/
        new CrewMember(5, 'Erlich', 'Bachman', Gender.male, Rank.chiefPettyOfficer, Department.medical),
        /*
                new CrewMember(6, 'Nelson', 'Bighetti', Gender.male, Rank.crewmanRecruit, Department.science),
                new CrewMember(7, 'Jian', 'Yang', Gender.male, Rank.crewmanRecruit, Department.tactical),
        */
      ],
      systems: [],
      messages: [],
    };

  }
}
