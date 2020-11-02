import { handleActions } from 'redux-actions';
import actions from '../actions';

const initialState = [];

function setFollowersList(state, action){
    const list = action.payload;
    return list;
}

export default handleActions({
    [actions.SetFollowersList]: setFollowersList
  }, initialState);