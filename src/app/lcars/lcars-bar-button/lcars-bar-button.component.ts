import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ssit-lcars-bar-button',
  templateUrl: './lcars-bar-button.component.html',
  styleUrls: ['./lcars-bar-button.component.styl']
})
export class LcarsBarButtonComponent implements OnInit {
  @Input()
  public title: string;

  constructor() { }

  ngOnInit() {
  }

}
