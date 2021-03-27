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
    Object.entries(state).forEach(([name, input]) => {
        const error = validateInput(input, input.value);

        newState[name] = {
            ...input,
            error
        }
    });
    
    setState(newState);

    const isValid = Object
      .values(newState)
      .every(input => input.error === '');

    return isValid;
  }

  function resetForm(){
    setState(initialValue);
  }
  
  return [state, setValueFromEvent, validate, resetForm];
}

export { useFormState };