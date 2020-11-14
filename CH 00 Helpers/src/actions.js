import { createAction } from './helpers';

const increment = createAction('Increment');
const decrement = createAction('Decrement');

export default { 
    increment,
    decrement
}