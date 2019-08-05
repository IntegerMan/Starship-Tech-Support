import {Rank} from './Rank';
import {Department} from '../Department';
import {Person} from './Person';

export class CrewMember extends Person {
  public rank: Rank;
  public department: Department;
  public daysInRank: number;

  public get isEnlisted(): boolean {
    return this.rank < Rank.EnsignJg;
  }

  public get isOfficer(): boolean {
    return !this.isEnlisted;
  }
}
