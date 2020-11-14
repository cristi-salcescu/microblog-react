import { INCREMENT, DECREMENT } from './action-types';

function increment(){
    return {
        type: INCREMENT
    }
}

function decrement(){
    return {
        type: DECREMENT
    }
}

export {
    increment,
    decrement
}