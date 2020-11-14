import { createReducer } from '../../shared/redux-helper';
import actions from '../actions';

const initialState = [];

function setPeople(state, action){
    const people = action.payload;
    return people;
}

export default createReducer(initialState, {
    [actions.SetPeople]: setPeople,
  });