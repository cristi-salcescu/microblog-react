import { combineReducers } from 'redux';
import posts from './posts/reducer';
import user from './user/reducer';
import people from './people/peopleReducer';

export default combineReducers({
    posts,
    user,
    people
});