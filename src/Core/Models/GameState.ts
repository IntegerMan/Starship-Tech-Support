import {WorkItem} from './WorkItem';
import {GameTime} from './GameTime';
import {CrewMember} from './crew/CrewMember';
import {ShipSystem} from './systems/ShipSystem';
import {GameMessage} from './GameMessage';

export interface GameState {
  openTickets: WorkItem[];
  closedCount: number;
  time: GameTime;
  crew: CrewMember[];
  systems: ShipSystem[];
  messages: GameMessage[];
}
