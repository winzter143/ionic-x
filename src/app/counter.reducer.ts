import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset, updateUser } from './counter.actions';
 
export const initialState = 0;
 
const _counterReducer = createReducer(initialState,
  on(increment, state => state + 1),
  on(decrement, state => state - 1),
  on(reset, state => 0),
);

// export const initialFund = {};
// const _userReducer = createReducer(initialFund,
//   on(updateUser, state => (hello){state["name"] = hello}),
 
// );

export function counterReducer(state, action) {
  return _counterReducer(state, action);
}