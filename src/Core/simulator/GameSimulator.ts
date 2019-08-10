import {GameState} from '../Models/GameState';
import {GameTime} from '../Models/GameTime';
import {WorkItem} from '../Models/WorkItem';
import {WorkItemType} from '../Models/WorkItemType';
import {CrewMember} from '../Models/crew/CrewMember';
import {Gender} from '../Models/crew/Gender';
import {Department} from '../Models/Department';
import {Rank} from '../Models/crew/Rank';
import {GameMessage} from '../Models/GameMessage';
import {MessageType} from '../Models/MessageType';

export class GameSimulator {
  public static simulate(state: GameState, elapsedTime: number): GameState {
    const newState = {... state};

    const time = state.time.increment(elapsedTime);
    newState.time = time;

    const messages: GameMessage[] = []; // This maybe should just slice the existing array
    for (const crewMember of state.crew) {
      const message: GameMessage = {
        createdTime: time,
        subject: `${crewMember.fullName} idles`,
        description: `${crewMember.fullName} has nothing to do and waits for something new to work on.`,
        fromCrewId: crewMember.id,
        messageType: MessageType.crewUpdate,
      };
      messages.push(message);
    }
    newState.messages = messages;

    return newState;
  }

  public static buildDefaultState(): GameState {
    return {
      openTickets: [
        new WorkItem('The Web Site is Down', 1, WorkItemType.incident, 1)
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
