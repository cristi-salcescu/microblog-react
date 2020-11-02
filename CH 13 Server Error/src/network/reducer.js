import { handleActions } from 'redux-actions';
import actions from './actions';

const initialState = {
    serverError : '',
    showError: false
}

function showServerError(state, action){
    const error = action.payload;
    const serverError = error.response 
        ? error.response.data 
        : error.message;
        
    return {
        ...state,
        serverError,
        showError: true
    };
}

function hideServerError(state, action){
    return {
        ...state,
        showError: false
    };
}

export default handleActions({
    [actions.ShowServerError]: showServerError,
    [actions.HideServerError]: hideServerError,
  }, initialState);