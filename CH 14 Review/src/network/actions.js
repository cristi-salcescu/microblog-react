import { createAction } from '../shared/redux-helper';

const ShowServerError = createAction('SetServerError');
const HideServerError = createAction('HideServerError');

export default { 
    ShowServerError,
    HideServerError
};