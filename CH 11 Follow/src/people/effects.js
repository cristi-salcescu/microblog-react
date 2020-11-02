import api from './api';
import actions from './actions';

function fetchPeople(text){    
    return function(dispatch, getState){
        const state = getState();
        const { user } = state;

        return api.fetchOtherUsers(user.id, text, user.token)
            .then(actions.SetPeople)
            .then(dispatch);
    }
}

function fetchFollowing(){
    return function(dispatch, getState){
        const state = getState();
        const { user } = state;

        return api
            .fetchFollowing(user.id, user.token)
            .then(extractProp('userId'))
            .then(fetchPeopleByIds(user.token))
            .then(actions.SetFollowingList)
            .then(dispatch);
    }
}

function fetchPeopleByIds(token){    
    return function(ids){
        return ids.length
            ? api.fetchUsersByIds(ids, token)
            : Promise.resolve([]);
    }
}


function follow(userId){
    return function(dispatch, getState){
        const state = getState();
        const { user } = state;
        const newFollower = {
            userId,
            followerId: user.id
        }

        return api
            .addFollower(newFollower, user.token)
            .then(fetchFollowing)
            .then(dispatch);
    }
}

function unfollow(userId){
    return function(dispatch, getState){
        const state = getState();
        const { user } = state;

        return api
            .fetchFollowingItem(userId, user.id, user.token)
            .then(deleteFollowingBy(user.token))
            .then(fetchFollowing)
            .then(dispatch)
    }
}

function deleteFollowingBy(token){ 
    return function({id}){
        return api.deleteFollowingItem(id, token)
    }
}

function prop(propName){
    return function(obj){
        return obj[propName];
    }
}

function extractProp(propName){
    return function(list){
        return list.map(prop(propName));
    }
}

export default { 
    fetchPeople, 
    fetchFollowing, 
    follow, 
    unfollow 
};