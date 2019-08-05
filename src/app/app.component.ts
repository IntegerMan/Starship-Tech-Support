import { Component } from '@angular/core';
import {GameStateStore} from './Reducers/GameStateStore';

@Component({
  selector: 'ssit-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  title = 'StarshipIt';
  ScreenName = 'SSIT';

  constructor(private state: GameStateStore) {
  }
}
