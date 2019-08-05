import { Component, OnInit } from '@angular/core';
import {GameStateStore} from '../../Reducers/GameStateStore';
import {beginShiftAction} from '../../Reducers/GameStateActions';

@Component({
  selector: 'ssit-lcars-footer',
  templateUrl: './lcars-footer.component.html',
  styleUrls: ['./lcars-footer.component.styl']
})
export class LcarsFooterComponent implements OnInit {

  constructor(private store: GameStateStore) { }

  ngOnInit() {
  }

  onBeginShiftClicked(): void {
    this.store.dispatch(beginShiftAction());
  }
}
