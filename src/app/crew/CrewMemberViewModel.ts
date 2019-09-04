import {GameState} from '../../Core/Models/GameState';
import {CrewMember} from '../../Core/Models/crew/CrewMember';
import {Department} from '../../Core/Models/Department';
import {WorkItem} from '../../Core/Models/WorkItems/WorkItem';
import {SkillViewModel} from './skill-view-model';

export class CrewMemberViewModel {

  public constructor (private crewMember: CrewMember, private state: GameState) {
    this.assignedTickets = state.openTickets.filter(t => t.assignedCrewId && t.assignedCrewId === crewMember.id);
  }

  public readonly assignedTickets: WorkItem[];

  public get hasAssignedTickets(): boolean {
    return this.assignedTickets.length > 0;
  }

  public get department(): Department {
    return this.crewMember.department;
  }

  public get id():  number {
    return this.crewMember.id;
  }

  public get fullName(): string {
    return this.crewMember.fullName;
  }

  public get skills(): SkillViewModel[] {
    const skills: SkillViewModel[] = [];

    let skillVM: SkillViewModel;
    for (const skill of this.crewMember.skills) {
      skillVM = new SkillViewModel(skill.skill, skill.level, skill.priority);
      skills.push(skillVM);
    }

    return skills;
  }

}
