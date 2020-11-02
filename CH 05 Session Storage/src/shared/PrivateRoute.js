import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

function PrivateRoute ({ component: Component, user, ...rest }) {
    return (
        <Route {...rest} render={props => (
            user.authenticated === true
            ? <Component {...props} />
            : <Redirect to='/login' />
        )} />
    )
}

export default connect(
    ({user}) => ({
        user
    })
  )(PrivateRoute);