import { createAction } from '@reduxjs/toolkit';

const increment = createAction('Increment');
const decrement = createAction('Decrement');

export default { 
    increment,
    decrement
}