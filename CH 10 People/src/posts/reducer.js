import { createReducer } from '@reduxjs/toolkit';
import actions from './actions';

const initialState = []

function setPosts(state, action){
    const posts = action.payload;
    return posts;
}

export default createReducer(initialState, {
    [actions.SetPosts]: setPosts,
  });