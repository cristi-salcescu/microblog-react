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

function handleActions(actionMap, initialState){
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
    handleActions
}