import { createReducer } from '../../shared/redux-helper';
import actions from '../actions';

const initialState = [];

function setFollowingList(state, action){
    const list = action.payload;
    return list;
}

export default createReducer(initialState, {
    [actions.SetFollowingList]: setFollowingList
  });