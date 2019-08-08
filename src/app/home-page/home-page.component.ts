import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {GameStateStore} from '../Reducers/GameStateStore';
import {GameMessage} from '../../Core/Models/GameMessage';

@Component({
  selector: 'ssit-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.styl']
})
export class HomePageComponent implements OnInit {

  public updates$: Observable<GameMessage[]>;

  constructor(private store: GameStateStore) {

  }

  ngOnInit(): void {
    this.updates$ = this.store.select(this.store.getUpdates);
  }

}
