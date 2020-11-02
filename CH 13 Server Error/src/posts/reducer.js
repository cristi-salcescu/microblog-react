import { handleActions } from 'redux-actions';
import actions from './actions';

const state = []

function setPosts(state, action){
    const posts = action.payload;
    return posts;
}

export default handleActions({
    [actions.SetPosts]: setPosts,
  }, state);