import {Ticket} from './Ticket';

export interface TicketsState {
  openTickets: Ticket[];
  closedCount: number;
}
