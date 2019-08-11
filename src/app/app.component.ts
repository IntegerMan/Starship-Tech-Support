/* tslint:disable:no-inferrable-types */
import {Component, OnInit} from '@angular/core';
import {beginShiftAction} from './Reducers/GameStateActions';
import {GameStateStore} from './Reducers/GameStateStore';
import {Observable} from 'rxjs';

@Component({
  selector: 'ssit-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit {

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
