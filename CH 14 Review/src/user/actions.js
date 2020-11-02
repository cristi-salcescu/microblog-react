import { createAction } from '../shared/redux-actions';

const SetToken = createAction('SetToken');
const SetUser = createAction('SetUser');
const Logout = createAction('Logout');

export default { 
    SetToken,
    SetUser,
    Logout
};