import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import Container from '@material-ui/core/Container';
import {useFormState} from '../shared/useFormState';

function Register({ registerUser }) {

  const [state, setInputValue, validate] = useFormState({
    name :{
      value: '',
      required: true
    },
    email: {
      value: '',
      required: true
    },
    password: {
      value: '',
      required: true
    }
  });

  function registerUserAndClear(){
    if(validate()){
      const user = { 
        name: state.name.value, 
        email: state.email.value, 
        password: state.password.value
      };
      registerUser(user);
    }
  }

  return (
  <Container maxWidth="xs">
    <div>
      <Typography component="h4" variant="h4">
        Register
      </Typography>
      <form>
      <FormGroup>
          <FormControl margin="normal">
          <TextField
            variant="outlined"
            label="Name"
            name="name"
            value={state.name.value} 
            onChange={setInputValue}
            error={!!state.name.error}
            helperText={state.name.error}
            required
          />
          </FormControl>
        </FormGroup>
        <FormGroup>
          <FormControl margin="normal">
          <TextField
            variant="outlined"
            label="Email"
            name="email"
            value={state.email.value} 
            onChange={setInputValue}
            error={!!state.email.error}
            helperText={state.email.error}
            required
          />
          </FormControl>
        </FormGroup>
        <FormGroup>
          <FormControl margin="normal">
            <TextField
              variant="outlined"
              label="Password"
              name="password"
              type="password"
              value={state.password.value} 
              onChange={setInputValue}
              error={!!state.password.error}
              helperText={state.password.error}
            />
          </FormControl>
        </FormGroup>

        <Button
          variant="contained"
          color="primary"
          onClick={registerUserAndClear}
        >
          Register
        </Button>
        <Box>            
          <Link 
            to="/login">
            Do have an account?
          </Link>
        </Box>
      </form>
    </div>
  </Container>
  );
}

export default Register;