import React, {useState} from 'react';
import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function NewPost({ addPost }) {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  function submitForm(){
      const post = { 
        title, 
        content 
      };

      addPost(post);
  }

  return (
  <form>
      <FormGroup>
        <FormControl>
          <TextField 
            label="Title"
            name="title"
            value={title} 
            onChange={e => setTitle(e.target.value)}
            />
        </FormControl>
      </FormGroup>

      <FormGroup>
        <TextField
          label="Share your thoughts"
          name="content"
          value={content} 
          onChange={e => setContent(e.target.value)}
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

export default NewPost;
