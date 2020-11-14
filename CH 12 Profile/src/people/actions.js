import { createAction } from '@reduxjs/toolkit';

const SetPeople = createAction('SetPeople');
const SetFollowingList = createAction('SetFollowingList');
const SetFollowersList = createAction('SetFollowersList');

export default { 
    SetPeople,
    SetFollowingList,
    SetFollowersList
};