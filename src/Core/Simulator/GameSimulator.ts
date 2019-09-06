import {GameState} from '../Models/GameState';
import {GameTime} from '../Models/GameTime';
import {WorkItem} from '../Models/WorkItems/WorkItem';
import {CrewMember} from '../Models/crew/CrewMember';
import {Gender} from '../Models/crew/Gender';
import {Department} from '../Models/Department';
import {Rank} from '../Models/crew/Rank';
import {CrewBehaviorTree} from './CrewBehaviorTree';
import {CrewContext} from './CrewContext';
import {ArrayHelpers} from '../../helpers/ArrayHelpers';
import {ShipSystem} from '../Models/systems/ShipSystem';
import {SystemType} from '../Models/systems/SystemType';
import {Importance} from '../Models/systems/Importance';

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
      for (let priority = 5; priority >= 1; priority--) {
        const crewContext: CrewContext = new CrewContext(newState, crewMember, priority);
        const result = GameSimulator._crewBehaviorTree.evaluate(crewContext);
        if (result.selectedNode) {
          break;
        }
      }

  }

    return newState;
  }

  public static buildDefaultState(): GameState {
    return {
      openTickets: [
        new WorkItem('Comms array keeps playing Rick Astley', 1, Department.engineering),
        new WorkItem('Targeting system locks on to own ship when target out of range', 2, Department.tactical)
      ],
      closedCount: 0,
      time: new GameTime(8, 4, 2422, 3, 20),
      crew: [
        new CrewMember(1, 'Richard', 'Hendricks', Gender.male, Rank.pettyOfficer3rdClass, Department.command),
        new CrewMember(2, 'Dinesh', 'Chugtai', Gender.male, Rank.crewman, Department.engineering),
        new CrewMember(3, 'Bertram', 'Gilfoyle', Gender.male, Rank.crewman, Department.engineering),
        new CrewMember(4, 'Jared', 'Dunn', Gender.male, Rank.crewmanApprentice, Department.operations),
        new CrewMember(5, 'Erlich', 'Bachman', Gender.male, Rank.chiefPettyOfficer, Department.medical),
        new CrewMember(6, 'Nelson', 'Bighetti', Gender.male, Rank.crewmanRecruit, Department.science),
        new CrewMember(7, 'Jian', 'Yang', Gender.male, Rank.crewmanRecruit, Department.tactical),
      ],
      systems: [
        new ShipSystem(1,'Gravity Generator', Department.engineering, SystemType.service, Importance.critical),
        new ShipSystem(2,'Point Defense Systems', Department.tactical, SystemType.hardware, Importance.high),
        new ShipSystem(3,'Torpedo Launchers', Department.tactical, SystemType.hardware, Importance.medium),
        new ShipSystem(4,'Carbon Dioxide Scrubbers',Department.engineering, SystemType.hardware, Importance.critical),
        new ShipSystem(5,'Long Range Communications Processor', Department.science, SystemType.service, Importance.high),
      ],
      messages: [],
    };

  }
}
