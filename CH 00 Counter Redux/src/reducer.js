import { INCREMENT, DECREMENT } from './action-types';

const initialState = 0;

function reducer(counter = initialState, action){
    switch(action.type){
      case INCREMENT: 
        return counter + 1;
      case DECREMENT: 
        return counter - 1;
      default:
        return counter; 
    }
  }

  export default reducer;