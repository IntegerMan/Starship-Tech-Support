import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ssit-lcars-button',
  templateUrl: './lcars-button.component.html',
  styleUrls: ['./lcars-button.component.styl']
})
export class LcarsButtonComponent implements OnInit {
  @Input()
  public title: string;

  constructor() { }

  ngOnInit() {
  }

}
