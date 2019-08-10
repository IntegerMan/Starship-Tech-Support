import {GameState} from '../Models/GameState';
import {CrewMember} from '../Models/crew/CrewMember';
import {GameMessage} from '../Models/GameMessage';
import {MessageType} from '../Models/MessageType';

export class CrewContext {
  public constructor(public state: GameState, public crewMember: CrewMember) {

  }

  public addMessage(subject: string, description?: string): void {
    if (!description) {
      description = '';
    }

    const message: GameMessage = {
      subject,
      description,
      fromCrewId: this.crewMember.id,
      messageType: MessageType.crewUpdate,
      createdTime: this.state.time
    };

    this.state.messages.push(message);
  }
}
