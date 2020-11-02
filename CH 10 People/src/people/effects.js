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

export default { 
    fetchPeople
};