function createAction(type){
    const actionCreator = payload => ({
            payload,
            type
        });

    Object.defineProperty(actionCreator, 'toString', {
        value: () => type,
        writable: false
    });

    return actionCreator;
}

function createReducer(initialState, actionMap){
    return function(state = initialState, action){
        const update = actionMap[action.type];
        
        if(typeof(update) === 'function'){
            return update(state, action);
        } else {
            return state;
        }
    }
}

export {
    createAction,
    createReducer
}