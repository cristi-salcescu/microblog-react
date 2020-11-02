import { createAction } from 'redux-actions';

const ShowServerError = createAction('SetServerError');
const HideServerError = createAction('HideServerError');

export default { 
    ShowServerError,
    HideServerError
};