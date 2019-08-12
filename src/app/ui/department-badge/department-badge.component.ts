import {Component, Input} from '@angular/core';
import {Department} from '../../../Core/Models/Department';

@Component({
  selector: 'ssit-department-badge',
  templateUrl: './department-badge.component.html',
  styleUrls: ['./department-badge.component.styl']
})
export class DepartmentBadgeComponent {

  @Input()
  department: Department;

  public getDepartmentName(department: Department): string {
    switch (department) {
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
        return `Unknown: ${department}`;
    }
  }

  public getDepartmentBadgeClass(department: Department): string {
    switch (department) {
      case Department.engineering:
        return 'badge-danger';
      case Department.science:
        return 'badge-info';
      case Department.medical:
        return 'badge-light';
      case Department.operations:
      case Department.tactical:
      case Department.command:
        return 'badge-warning';
      default:
        return `badge-light`;
    }
  }
}
