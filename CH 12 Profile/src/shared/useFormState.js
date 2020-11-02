import { useState } from 'react';

function useFormState(initialValue){
  const [state, setState] = useState(initialValue);
  
  function setValueFromEvent(e){
    const { value, name } = e.target;
    
    const input = state[name];
    const error = validateInput(input, value);
    
    setState({
        ...state,
        [name] : {
            ...input,
            value,
            error
        }
    }); 
  }

  function validateInput(input, value){
    let error = '';
    
    if(input.required && value === ''){
        error = 'Field is required';
    }
    
    return error;
  }

  function validate(){
    const newState = {};
    Object.keys(state).forEach(name => {
        const input = state[name]
        const error = validateInput(input, input.value);
        newState[name] = {
            ...input,
            error
        }
    });
    setState(newState);

    const hasErrors = Object
      .values(newState)
      .find(input => input.error);
    return !hasErrors;
  }

  function resetForm(){
    setState(initialValue);
  }
  
  return [state, setValueFromEvent, validate, resetForm];
}

export { useFormState };