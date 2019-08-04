import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ssit-lcars-nav-button',
  templateUrl: './lcars-nav-button.component.html',
  styleUrls: ['./lcars-nav-button.component.styl']
})
export class LcarsNavButtonComponent implements OnInit {
  @Input()
  public title: string;

  @Input()
  public route = '/home';

  constructor() { }

  ngOnInit() {
  }

}
