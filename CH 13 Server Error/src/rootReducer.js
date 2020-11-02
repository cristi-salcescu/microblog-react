import { combineReducers } from 'redux';
import posts from './posts/reducer';
import user from './user/reducer';
import people from './people/reducers/peopleReducer';
import followingList from './people/reducers/followingReducer';
import followersList from './people/reducers/followersReducer';
import network from './network/reducer';

export default combineReducers({
    posts,
    user,
    people,
    followingList,
    followersList,
    network
});