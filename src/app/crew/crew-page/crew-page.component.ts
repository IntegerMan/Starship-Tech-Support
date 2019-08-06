import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {CrewMember} from '../../../Core/Models/crew/CrewMember';
import {GameStateStore} from '../../Reducers/GameStateStore';

@Component({
  selector: 'ssit-crew-page',
  templateUrl: './crew-page.component.html',
  styleUrls: ['./crew-page.component.styl']
})
export class CrewPageComponent implements OnInit {

  public crew$: Observable<CrewMember[]>;

  constructor(private store: GameStateStore) {

  }

  ngOnInit() {
    this.crew$ = this.store.select(this.store.getCrewMembers);
  }

}
