import { combineReducers } from 'redux';
import posts from './posts/reducer';
import user from './user/reducer';
import people from './people/reducers/peopleReducer';
import followingList from './people/reducers/followingReducer';

export default combineReducers({
    posts,
    user,
    people,
    followingList
});