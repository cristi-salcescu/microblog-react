import React from 'react';
import { BrowserRouter as Router, Route, Switch } 
    from 'react-router-dom';
import PrivateRoute from './shared/PrivateRoute';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Menu from './Menu';
import NewPost from './posts/NewPost';
import Timeline from './posts/Timeline';
import People from './people/People';
import Profile from './people/Profile';
import Login from './user/Login';
import Register from './user/Register';

const posts = [
  {
    "title": "How to make complex problems easier",
    "content": "Our natural way of dealing with complexity is to break it into smaller pieces and then put everything back together.",
    "userId": 1,
    "userName": "Christian",
    "id": 1
  },
  {
    "title": "Engage all Your Senses When Learning",
    "content": "Different people like to learn in different ways. Some prefer reading, others watching training videos, others learn by doing or by hearing information.",
    "userId": 2,
    "userName": "Adam",
    "id": 2
  },
  {
    "title": "Things on null and undefined that you should know",
    "content": "Null and undefined are the so-called nullish values.\nYou may know the falsy values which are false, 0, NaN, empty string '', undefined, and null. So null and undefined are also falsy values, but they are the only nullish values.",
    "userId": 1,
    "userName": "Christian",
    "id": 3
  }
];

const people = [
  {
    "email": "christian@email.com",
    "password": "$2a$10$P2oGuzzvklNf51W4Widt9e980kS394DJ1NgvhtCuvDMeuuYRzLOnS",
    "name": "Christian",
    "id": 1
  },
  {
    "email": "adam@email.com",
    "password": "$2a$10$P2oGuzzvklNf51W4Widt9e980kS394DJ1NgvhtCuvDMeuuYRzLOnS",
    "name": "Adam",
    "id": 2
  },
  {
    "email": "mark@email.com",
    "password": "$2a$10$P2oGuzzvklNf51W4Widt9e980kS394DJ1NgvhtCuvDMeuuYRzLOnS",
    "name": "Mark",
    "id": 3
  }
];

const user = people[0];

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
              component={() => <Timeline posts={posts} />} />
            <PrivateRoute 
              path="/people"
              component={() => <People people={people} />} />
            <PrivateRoute 
              path="/profile"
              component={() =>
                <Profile 
                user={user} 
                followingList={people} 
                followersList={people} /> 
              } />
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
  </Router>
  );
}

export default App;
