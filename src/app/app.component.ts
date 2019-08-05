import {Component, OnInit} from '@angular/core';
import {GameStateStore} from './Reducers/GameStateStore';
import {GameTime} from '../Core/Models/GameTime';
import {Observable} from 'rxjs';

@Component({
  selector: 'ssit-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit {
  public time$: Observable<string>;

  constructor(private state: GameStateStore) {
  }

  ngOnInit(): void {
    this.time$ = this.state.select(this.state.getTime);
  }

}
