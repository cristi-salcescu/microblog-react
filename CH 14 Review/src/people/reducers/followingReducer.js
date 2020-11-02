import { handleActions } from '../../shared/redux-actions';
import actions from '../actions';

const initialState = [];

function setFollowingList(state, action){
    const list = action.payload;
    return list;
}

export default handleActions({
    [actions.SetFollowingList]: setFollowingList
  }, initialState);