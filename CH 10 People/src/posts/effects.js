import api from './api';
import actions from './actions';

function fetchPosts(){    
    return function(dispatch, getState){
        const state = getState();
        const { user } = state;

        return api.fetchPosts(user.id, user.token)
            .then(actions.SetPosts)
            .then(dispatch);
    }
}

function addPost(post){
    return function(dispatch, getState){
        const state = getState();
        const { user } = state;
        const newPost = {
            ...post,
            userId : user.id,
            userName: user.name
        }

        return api.addPost(newPost, user.token)
            .then(fetchPosts)
            .then(dispatch)
            .then(redirectToTimeline);
    }
}

function deletePost(id){
    return function(dispatch, getState){
        const state = getState();
        const { token } = state.user;

        return api.deletePost(id, token)
            .then(fetchPosts)
            .then(dispatch)
    }
}

function redirectToTimeline(){
    window.location.replace('/');
}


export default { 
    fetchPosts, 
    addPost, 
    deletePost 
};