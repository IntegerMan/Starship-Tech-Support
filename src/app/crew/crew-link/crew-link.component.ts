import {Component, Input, OnInit} from '@angular/core';
import {CrewMember} from '../../../Core/Models/crew/CrewMember';

@Component({
  selector: 'ssit-crew-link',
  templateUrl: './crew-link.component.html',
  styleUrls: ['./crew-link.component.styl']
})
export class CrewLinkComponent implements OnInit {

  @Input()
  public crew: CrewMember;

  constructor() { }

  ngOnInit() {
  }

}
