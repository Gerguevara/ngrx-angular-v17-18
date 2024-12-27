import { createReducer, on } from "@ngrx/store";
import { initialState } from "../initialState";
import { decrement, increment, incrementBy, init, set } from "../actions/counter.actions";

export const counterReducer = createReducer(
  initialState,
  on(increment, state => ({ ...state, currentCount: state.currentCount + 1 })),
  on(decrement, state => ({ ...state, currentCount: state.currentCount - 1 })),
  on(incrementBy, (state, { count }) => ({ ...state, currentCount: state.currentCount + count })),
  on(set, (state, action) => ({ currentCount: action.count })),
  // init is an action that is dispatched when the component is initialized
  // no need to  be implemented in the reducer
  // on(init, (state, action) => ({ ...state }))
)

// alternative way to write  an action
// on(incrementBy, (state, action) => ({ ...state, currentCount: state.currentCount + action.count  }))

