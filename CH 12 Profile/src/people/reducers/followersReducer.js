import { createReducer } from '@reduxjs/toolkit';
import actions from '../actions';

const initialState = [];

function setFollowersList(state, action){
    const list = action.payload;
    return list;
}

export default createReducer(initialState, {
    [actions.SetFollowersList]: setFollowersList
  });