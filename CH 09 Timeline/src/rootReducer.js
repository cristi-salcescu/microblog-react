import { combineReducers } from 'redux';
import posts from './posts/reducer';
import user from './user/reducer';

export default combineReducers({
    posts,
    user
});