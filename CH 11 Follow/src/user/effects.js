import api from './api';
import actions from './actions';

function registerUser(user){
    return function(dispatch){
        return api.registerUser(user)
            .then(actions.SetToken)
            .then(dispatch)
            .then(() => fetchUser(user.email))
            .then(dispatch)
            .then(redirectToTimeline);
    }
}

function login(credentials, history){
    return function(dispatch){
        return api.login(credentials)
            .then(actions.SetToken)
            .then(dispatch)
            .then(() => fetchUser(credentials.email))
            .then(dispatch)
            .then(redirectToTimeline(history))
    }
}

function logout(){
    return function(dispatch){
        Promise.resolve()
            .then(actions.Logout)
            .then(dispatch)
            .then(redirectToLogin)
    }
}

function fetchUser(email){
    return function(dispatch, getState){
        const state = getState();
        const { token } = state.user;

        return api.fetchUser(email, token)
            .then(actions.SetUser)
            .then(dispatch)
    }
}

function redirectToTimeline(history){
    return function(){
        history.push('/');
    }
}

function redirectToLogin(){
    window.location.replace('/login');
}

export default { 
    registerUser, 
    login, 
    logout 
};
