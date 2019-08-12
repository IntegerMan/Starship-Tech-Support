import { Component, OnInit } from '@angular/core';
import {GameStateStore} from '../../Reducers/GameStateStore';
import {Observable} from 'rxjs';
import {beginShiftAction} from '../../Reducers/GameStateActions';

@Component({
  selector: 'ssit-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.styl']
})
export class NavbarComponent implements OnInit {

  constructor(private state: GameStateStore) {
  }

  public time$: Observable<string>;

  ngOnInit(): void {
    this.time$ = this.state.select(this.state.getTime);
  }

  onBeginShiftClick() {
    this.state.dispatch(beginShiftAction());
  }
}
