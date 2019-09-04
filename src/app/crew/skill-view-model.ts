import {Skill} from '../../Core/Models/skill';

export class SkillViewModel {

  constructor(public skill: Skill, public level: number, public priority: number) {
  }

  public get name(): string {
    switch (this.skill) {
      case Skill.triageWorkItem:
        return 'Triage Work Item';

      case Skill.fixDefect:
        return 'Fix Defects';

      default:
        return this.skill;
    }
  }

  public get levelText(): string {
    return 'Untrained';
  }
}
