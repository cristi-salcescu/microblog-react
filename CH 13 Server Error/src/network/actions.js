import { createAction } from '@reduxjs/toolkit';

const ShowServerError = createAction('SetServerError');
const HideServerError = createAction('HideServerError');

export default { 
    ShowServerError,
    HideServerError
};