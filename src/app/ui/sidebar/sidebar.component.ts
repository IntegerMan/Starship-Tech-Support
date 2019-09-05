import {Component, OnInit} from '@angular/core';
import {Department} from '../../../Core/Models/Department';

@Component({
  selector: 'ssit-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.styl']
})
export class SidebarComponent implements OnInit {
  public departments: Department[] = [
    Department.command,
    Department.science,
    Department.tactical,
    Department.operations,
    Department.engineering,
    Department.medical
  ];

  constructor() { }

  ngOnInit() {
  }

}
