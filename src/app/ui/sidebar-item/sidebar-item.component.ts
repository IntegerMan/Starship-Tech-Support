import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ssit-sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.styl']
})
export class SidebarItemComponent implements OnInit {

  @Input()
  icon: string = 'fa-biohazard';

  @Input()
  isDisabled: boolean = false;

  @Input()
  textClass: string = '';

  @Input()
  target: string;

  constructor() { }

  ngOnInit() {
  }

}
