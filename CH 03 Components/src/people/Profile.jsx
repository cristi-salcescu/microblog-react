import React from 'react';

import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import PeopleList from './PeopleList';

import { getAvatarTitle } from '../user/utils.js';

function Profile({ user, followingList, followersList }) {
  return (
  <React.Fragment>
    <Avatar alt={user.name}>
      {getAvatarTitle(user.name)}
    </Avatar>
    <Typography variant="h5" gutterBottom>
      {user.name}
    </Typography>
    <Typography variant="subtitle1" gutterBottom>
      {user.email}
    </Typography>
    <Typography variant="h6"  >
      {followingList.length} Following
    </Typography>

    <PeopleList 
      people={followingList}
    />  

    <Typography variant="h6"  >
      {followersList.length} Followers 
    </Typography>

    <PeopleList 
      people={followersList}
    />
  </React.Fragment>
  );
}

export default Profile;