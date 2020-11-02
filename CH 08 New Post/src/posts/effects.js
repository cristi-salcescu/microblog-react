import api from './api';

function addPost(post, history){
    return function(dispatch, getState){
        const state = getState();
        const { user } = state;
        const newPost = {
            ...post,
            userId : user.id,
            userName: user.name
        }

        return api.addPost(newPost, user.token)
            .then(redirectToTimeline(history));
    }
}

function redirectToTimeline(history){
    return function(){
        history.push('/')
    }
}

export default { 
    addPost
};