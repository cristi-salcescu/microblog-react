import { createReducer } from '@reduxjs/toolkit';
import actions from '../actions';

const initialState = [];

function setPeople(state, action){
    const people = action.payload;
    return people;
}

export default createReducer(initialState, {
    [actions.SetPeople]: setPeople,
  });