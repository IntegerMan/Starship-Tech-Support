import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {WorkItem} from '../../Core/Models/WorkItems/WorkItem';
import {Observable} from 'rxjs';
import {GameStateStore} from '../Reducers/GameStateStore';
import {select} from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class TicketLookupService implements Resolve<WorkItem> {

  constructor(private store: GameStateStore) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<WorkItem> | Promise<WorkItem> | WorkItem {

    console.debug('Resolve');

    const id = route.paramMap.get('id');

    console.debug('Resolved ID as ' + id);
    // TODO: Fetch by ID

    return null;
  }
}
