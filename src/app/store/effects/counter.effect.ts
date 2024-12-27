import { inject, Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { decrement, increment, incrementBy, init, set } from "../actions/counter.actions";
import { of, switchMap, tap, withLatestFrom } from "rxjs";
import { Store } from "@ngrx/store";


// effects are like pipelines for actions
// They run after the store has already processed the action and updated the state.
@Injectable()
export class CounterEffect {

  actions = inject(Actions)
  store = inject(Store<{ counter: { currentCount: number } }>);



  loadCountFromStorage = createEffect(() =>
    this.actions.pipe(
      ofType(init),
      switchMap(() => {
        const count = sessionStorage.getItem('value') ?? 0;
        return of(set({ count: +count }));
      })
    ),
  )

  saveLastOperationCount = createEffect(() =>
    this.actions.pipe(
      ofType(increment, decrement, incrementBy),
      tap(action => {
        sessionStorage.setItem('count', action.type === increment.type ? 'increment' : 'decrement');
      })
    ),
    { dispatch: false }
  )
  saveLastValue = createEffect(() =>
    this.actions.pipe(
      ofType(increment, decrement, incrementBy),
      withLatestFrom(this.store.select('counter')),
      tap(([action, counter,]) => {
        console.log('action triggered', action.type);
        sessionStorage.setItem('value', counter.currentCount.toString());
      })
    ),
    { dispatch: false }
  )
  // alternative way to write the effect
  saveLastValue2 = createEffect(() =>
    this.actions.pipe(
      ofType(increment, decrement, incrementBy),
      withLatestFrom(this.store.select('counter')),
      tap(action => {
        sessionStorage.setItem('valueDouble', (action[1].currentCount * 2).toString());
      })
    ),
    { dispatch: false }
  )

}
