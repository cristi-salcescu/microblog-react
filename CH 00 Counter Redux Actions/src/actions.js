import { createAction } from 'redux-actions';

const increment = createAction('Increment');
const decrement = createAction('Decrement');

export default { 
    increment,
    decrement
}