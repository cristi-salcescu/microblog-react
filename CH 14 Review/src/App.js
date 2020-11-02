import React from 'react';
import { BrowserRouter as Router, Route, Switch } 
    from 'react-router-dom';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import PrivateRoute from './shared/PrivateRoute';
import Menu from './Menu';
import NewPost from './posts/NewPost';
import Timeline from './posts/Timeline';
import People from './people/People';
import Profile from './people/Profile';
import Login from './user/Login';
import Register from './user/Register';
import ServerError from './network/ServerError';

function App() {
  return (
    <Router>
      <Route exact path={['/', '/people', '/profile', '/newpost']}>
        <Container>
        <Grid container spacing={1}>
          <Grid item md={3} xs={12} lg={2}>
            <Menu />
          </Grid>
          <Grid item md={6} xs={12} lg={4}> 
          <Switch>      
              <PrivateRoute 
                path="/"
                exact
                component={Timeline} />
              <PrivateRoute 
                path="/people"
                component={People} />
              <PrivateRoute 
                path="/profile"
                component={Profile} />
              <PrivateRoute 
                path='/newpost'
                component={NewPost} />
            </Switch>
          </Grid> 
        </Grid>
        </Container>
      </Route>
      <Route path={["/register", "/login"]}>
          <Route 
           path="/register" 
           component={Register} />
          <Route 
           path="/login" 
           component={Login} />
      </Route>
      <ServerError />
    </Router>
  );
}

export default App;
