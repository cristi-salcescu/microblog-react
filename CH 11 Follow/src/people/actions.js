import { createAction } from 'redux-actions';

const SetPeople = createAction('SetPeople');
const SetFollowingList = createAction('SetFollowingList');

export default { 
    SetPeople,
    SetFollowingList
};