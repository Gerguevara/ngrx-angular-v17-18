import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, incrementBy } from '../store/actions/counter.actions';


@Component({
  selector: 'app-counter-controls',
  templateUrl: './counter-controls.component.html',
  styleUrls: ['./counter-controls.component.css'],
  standalone: true,
})
export class CounterControlsComponent {

  store = inject(Store<{ counter: { currentCount: number } }>);
  increment(value = 0) {
    if (!value) {
    //another way: { type: '[Counter] Increment' }
    this.store.dispatch(increment());
      return;
    }
    this.store.dispatch(incrementBy({ count: value }));
  }

  decrement() {
    //another way: this.store.dispatch({ type: '[Counter] Decrement' });
    this.store.dispatch(decrement());
  }
}
