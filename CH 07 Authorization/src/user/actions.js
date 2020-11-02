import { createAction } from 'redux-actions';

const SetToken = createAction('SetToken');
const SetUser = createAction('SetUser');
const Logout = createAction('Logout');

export default { 
    SetToken,
    SetUser,
    Logout
};