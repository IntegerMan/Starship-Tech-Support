import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {CrewMemberViewModel} from '../CrewMemberViewModel';
import {GameStateStore} from '../../Reducers/GameStateStore';
import {Department} from '../../../Core/Models/Department';

@Component({
  selector: 'ssit-crew-list-sidebar-group',
  templateUrl: './crew-list-sidebar-group.component.html',
  styleUrls: ['./crew-list-sidebar-group.component.styl']
})
export class CrewListSidebarGroupComponent implements OnInit {

  @Input()
  public department: Department = Department.engineering;

  public crew$: Observable<CrewMemberViewModel[]>;

  constructor(private store: GameStateStore) {

  }

  ngOnInit() {
    this.crew$ = this.store.select(this.store.getCrewMembersInDepartment(this.department));
  }

  public getDepartmentName(): string {
    switch (this.department) {
      case Department.science:
        return 'Science';
      case Department.engineering:
        return 'Engineering';
      case Department.medical:
        return 'Medical';
      case Department.operations:
        return 'Operations';
      case Department.tactical:
        return 'Tactical';
      case Department.command:
        return 'Command';
      default:
        return 'Department ' + this.department;
    }
  }

  public getDepartmentIcon(): string {
    switch (this.department) {
      case Department.science:
        return 'fa-microscope';
      case Department.engineering:
        return 'fa-tools';
      case Department.medical:
        return 'fa-procedures';
      case Department.operations:
        return 'fa-boxes';
      case Department.tactical:
        return 'fa-crosshairs';
      case Department.command:
        return 'fa-sitemap';
      default:
        return 'Department ' + this.department;
    }
  }

  public getDepartmentClass(): string {
    switch (this.department) {
      case Department.science:
        return 'text-info';
      case Department.engineering:
        return 'text-danger';
      case Department.medical:
        return 'text-info';
      case Department.operations:
        return 'text-white';
      case Department.tactical:
        return 'text-warning';
      case Department.command:
        return 'text-warning';
      default:
        return 'text-muted';
    }
  }
}
