import React from 'react';
import { connect } from 'react-redux';

import actions from './actions';

function Counter({counter, increment, decrement}){
    return(
        <div>
            <div>{counter}</div>
            <div>
                <button 
                type="button" 
                onClick={decrement}>
                    -
                </button>
                <button 
                type="button" 
                onClick={increment}>
                    +
                </button>
            </div>
        </div>
    )
}

export default connect(
    counter => ({ counter }),
    { ...actions }
)(Counter);