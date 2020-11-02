import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import PeopleList from './PeopleList';

import effects from './effects';
import { getAvatarTitle } from '../user/utils.js';

function People({user, followingList, followersList, fetchFollowing, fetchFollowers}) {

  useEffect(() => {
    fetchFollowing();
    fetchFollowers();
  },[fetchFollowing, fetchFollowers]);

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

export default connect(
  ({user, followingList, followersList}) => ({
      user,
      followingList,
      followersList
  }), {
    ...effects
  }
)(People);