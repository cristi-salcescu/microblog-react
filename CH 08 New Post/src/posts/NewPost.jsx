import React from 'react';
import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { useHistory } from "react-router-dom";
import { useFormState } from '../shared/useFormState';
import { connect } from 'react-redux';
import effects from './effects';

function NewPost({ addPost }) {

  const [state, setInputValue, validate] = useFormState({
    title :{
      value: '',
      required: true
    },
    content: {
      value: '',
      required: true
    }
  });
  const history = useHistory();

  function submitForm(){
    const post = { 
      title : state.title.value, 
      content: state.content.value 
    };

    if(validate()){
      addPost(post, history);
    }
  }

  return (
  <form>
    <FormGroup>
      <FormControl>
        <TextField 
          label="Title"
          name="title"
          value={state.title.value} 
          onChange={setInputValue}
          error={!!state.title.error}
          helperText={state.title.error}
          />
      </FormControl>
    </FormGroup>

    <FormGroup>
      <TextField
        label="Share your thoughts"
        name="content"
        value={state.content.value} 
        onChange={setInputValue}
        error={!!state.content.error}
        helperText={state.content.error}
        multiline
        rows={4}
      />
    </FormGroup>

    <Box mt={1}>
        <Button 
          variant="contained" 
          color="primary"
          onClick={submitForm} >
            Post
        </Button>
    </Box>
  </form>
  );
}

export default connect(
  null, {
  ...effects
}
)(NewPost);
