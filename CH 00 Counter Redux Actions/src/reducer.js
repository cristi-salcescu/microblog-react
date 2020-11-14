import { handleActions } from 'redux-actions';
import actions from './actions';

const initialState = 0;

function increment(state, action){
    return state + 1;
}

function decrement(state, action){
  return state + 1;
}

export default handleActions({
    [actions.increment]: increment,
    [actions.decrement]: decrement,
  }, initialState);