import { createReducer } from '@reduxjs/toolkit';
import actions from './actions';

const initialState = {
    token: '',
    id: 0,
    name: '',
    email: '',
    authenticated : false
}

function setToken(state, action){
    const token = action.payload.accessToken;
    return {
        ...state,
        token,
        authenticated : true
    };
}

function setUser(state, action){
    const user = action.payload;
    return {
        ...state,
        ...user
    };
}

function logout(){
    return initialState;
}

export default createReducer(initialState, {
        [actions.SetToken]: setToken,
        [actions.SetUser]: setUser,
        [actions.Logout]: logout
    });

