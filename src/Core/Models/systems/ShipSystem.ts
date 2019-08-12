import {SystemType} from './SystemType';
import {Importance} from './Importance';
import {Department} from '../Department';

export class ShipSystem {
  constructor(public id: number,
              public name: string,
              public department: Department,
              public type: SystemType = SystemType.application,
              public importance: Importance = Importance.low) {
  }
}
