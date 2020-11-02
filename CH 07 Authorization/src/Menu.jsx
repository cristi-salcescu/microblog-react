import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { Link, useHistory } from 'react-router-dom';

import { connect } from 'react-redux';
import effects from './user/effects';

function BlogMenuList({ logout}) {
  const history = useHistory();

  return (
  <MenuList>
    <MenuItem 
      component={Link} 
      to='/'>
      Timeline
    </MenuItem>
    <MenuItem 
      component={Link} 
      to='/people'>
      People
    </MenuItem>
    <MenuItem 
      component={Link} 
      to='/profile'>
      Profile
    </MenuItem>      
    <MenuItem 
      component={Link} 
      to="/newpost">
      NewPost
    </MenuItem>
    <MenuItem onClick={() => logout(history)}>
      Logout
    </MenuItem>      
  </MenuList>
  );
}

export default connect(
  null, {
  ...effects
}
)(BlogMenuList);
