import { Component, OnInit } from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {CrewMember} from '../../../Core/Models/crew/CrewMember';
import {GameStateStore} from '../../Reducers/GameStateStore';
import {ActivatedRoute} from '@angular/router';
import {CrewMemberViewModel} from '../CrewMemberViewModel';

@Component({
  selector: 'ssit-crew-details-page',
  templateUrl: './crew-details-page.component.html',
  styleUrls: ['./crew-details-page.component.styl']
})
export class CrewDetailsPageComponent implements OnInit {

  public crewman$: Observable<CrewMemberViewModel>;

  private sub: Subscription | null = null;

  constructor(private state: GameStateStore, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = +params['id'];
      this.crewman$ = this.state.select(this.state.getCrewMemberById(id));
    });
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
      this.sub = null;
    }
  }

}
