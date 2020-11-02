import { createAction } from '../shared/redux-actions';

const SetPeople = createAction('SetPeople');
const SetFollowingList = createAction('SetFollowingList');
const SetFollowersList = createAction('SetFollowersList');

export default { 
    SetPeople,
    SetFollowingList,
    SetFollowersList
};