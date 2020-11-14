import { createReducer } from '@reduxjs/toolkit';
import actions from '../actions';

const initialState = [];

function setFollowingList(state, action){
    const list = action.payload;
    return list;
}

export default createReducer(initialState, {
    [actions.SetFollowingList]: setFollowingList
  });