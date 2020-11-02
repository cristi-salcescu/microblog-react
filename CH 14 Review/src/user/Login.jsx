import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import Container from '@material-ui/core/Container';

import { connect } from 'react-redux';
import effects from './effects';

function Login({login}) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  function validate(){
    let emailErrors = false;
    let passwordErrors = false;
    let isValid = true;

    if(email === ''){
      emailErrors = true;
      isValid = false;
    }

    if(password === ''){
      passwordErrors = true;
      isValid = false;
    }

    return {
      isValid,
      errors : {
        email: emailErrors,
        password: passwordErrors
      }
    }
  }

  function submitForm(){
    const {isValid, errors } = validate();

    if(isValid){
      const credentials = { email, password };
      login(credentials);
    } else {
      setErrors(errors);
    }
  }

  return (
    <Container maxWidth="xs">
      <div>
        <Typography component="h4" variant="h4">
          Login
        </Typography>
        <form>
          <FormGroup>
            <FormControl margin="normal">
            <TextField
              variant="outlined"
              label="Email"
              value={email} 
              onChange={e => setEmail(e.target.value)}
              autoComplete="email"
              autoFocus
              required
              error = {errors.email}
            />
            </FormControl>
          </FormGroup>
          <FormGroup>
            <FormControl margin="normal">
              <TextField
                variant="outlined"
                label="Password"
                type="password"
                value={password} 
                onChange={e => setPassword(e.target.value)}
                required
                error = {errors.password}
              />
            </FormControl>
          </FormGroup>

          <Button
            variant="contained"
            color="primary"
            onClick={submitForm}
          >
            Login
          </Button>

          <Box>            
            <Link 
             component={RouterLink} 
             to="/register">
              Don't have an account?
            </Link>
          </Box>
        </form>
      </div>
    </Container>
  );
}

export default connect(
  null, {
  ...effects
}
)(Login);