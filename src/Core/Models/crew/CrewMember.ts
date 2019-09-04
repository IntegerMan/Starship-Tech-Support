import {Rank} from './Rank';
import {Department} from '../Department';
import {Person} from './Person';
import {Gender} from './Gender';
import {CrewSkill} from './CrewSkill';
import {Skill} from '../skill';

export class CrewMember extends Person {
  constructor(id: number, firstName: string, lastName: string, gender: Gender, rank: Rank, department: Department) {
    super(id, firstName, lastName, gender);
    this.rank = rank;
    this.department = department;
    this.daysInRank = 0;
    this.skills = CrewMember.buildSkills(rank, department);
  }

  public rank: Rank;
  public department: Department;
  public daysInRank: number;
  public skills: CrewSkill[];

  public get isEnlisted(): boolean {
    return this.rank < Rank.ensignJg;
  }

  public get isOfficer(): boolean {
    return !this.isEnlisted;
  }

  private static buildSkills(rank: Rank, department: Department): CrewSkill[] {
    const skills: CrewSkill[] = [];

    const keys = Object.keys(Skill);

    let crewSkill: CrewSkill;
    for (const skill of keys) {
      if (typeof(Skill[skill]) !== 'number') continue;

      crewSkill = new CrewSkill();
      crewSkill.level = 0;
      crewSkill.priority = 0;
      crewSkill.skill = Skill[skill];

      skills.push(crewSkill);
    }

    return skills;
  }

  public clone(): CrewMember {
    return new CrewMember(this.id, this.firstName, this.lastName, this.gender, this.rank, this.department);
  }
}
