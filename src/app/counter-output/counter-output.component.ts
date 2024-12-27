import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { selectCountDouble, selectCounter } from '../store/selectors/counter.selector';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
  standalone: true,
})
export class CounterOutputComponent{
  readonly store = inject(Store<{counter: { currentCount: number}}>);
  counter = toSignal(this.store.select(selectCounter));
  double = toSignal(this.store.select(selectCountDouble));
  // alternative way , instead of using the selector, you can use the following code
  // counter = toSignal(this.store.select('counter').pipe(map(state => state.currentCount)));



}
