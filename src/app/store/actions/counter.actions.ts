
import { createAction, props } from "@ngrx/store";


export const init = createAction('[Counter] Init');
export const set = createAction('[Counter] Set', props<{ count: number }>());
export const increment = createAction('[Counter] Increment');
export const decrement = createAction('[Counter] Decrement');
export const  incrementBy = createAction('[Counter] Increment By', props<{ count: number }>());

