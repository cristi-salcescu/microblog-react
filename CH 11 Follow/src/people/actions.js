import { createAction } from '@reduxjs/toolkit';

const SetPeople = createAction('SetPeople');
const SetFollowingList = createAction('SetFollowingList');

export default { 
    SetPeople,
    SetFollowingList
};