import { createAction } from '../shared/redux-actions';

const ShowServerError = createAction('SetServerError');
const HideServerError = createAction('HideServerError');

export default { 
    ShowServerError,
    HideServerError
};