import { createReducer } from '../shared/redux-helper';
import actions from './actions';

const initialState = []

function setPosts(state, action){
    const posts = action.payload;
    return posts;
}

export default createReducer(initialState, {
    [actions.SetPosts]: setPosts,
  });