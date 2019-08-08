import {GameTime} from './GameTime';
import {MessageType} from './MessageType';

export interface GameMessage {
  subject: string;
  description: string;
  fromCrewId: number;
  createdTime: GameTime;
  messageType: MessageType;
}
