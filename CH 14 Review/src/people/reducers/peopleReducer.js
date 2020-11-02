import { handleActions } from '../../shared/redux-actions';
import actions from '../actions';

const initialState = [];

function setPeople(state, action){
    const people = action.payload;
    return people;
}

export default handleActions({
    [actions.SetPeople]: setPeople,
  }, initialState);