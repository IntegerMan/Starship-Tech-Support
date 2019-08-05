import {Ticket} from '../tickets/Ticket';
import {GameTime} from './GameTime';

export interface GameState {
  openTickets: Ticket[];
  closedCount: number;
  time: GameTime;
}
