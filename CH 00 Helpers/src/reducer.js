import { createReducer } from './helpers';
import actions from './actions';

const initialState = 0;

function increment(state, action){
    return state + 1;
}

function decrement(state, action){
  return state + 1;
}

export default createReducer(initialState, {
    [actions.increment]: increment,
    [actions.decrement]: decrement,
  },);