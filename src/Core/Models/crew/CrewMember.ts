import {Rank} from './Rank';
import {Department} from '../Department';
import {Person} from './Person';
import {Gender} from './Gender';

export class CrewMember extends Person {
  constructor(id: number, firstName: string, lastName: string, gender: Gender, rank: Rank, department: Department) {
    super(id, firstName, lastName, gender);
    this.rank = rank;
    this.department = department;
    this.daysInRank = 0;
  }

  public rank: Rank;
  public department: Department;
  public daysInRank: number;

  public get isEnlisted(): boolean {
    return this.rank < Rank.ensignJg;
  }

  public get isOfficer(): boolean {
    return !this.isEnlisted;
  }
}
