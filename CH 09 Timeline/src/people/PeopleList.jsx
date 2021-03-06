import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PersonAddDisabledIcon from '@material-ui/icons/PersonAddDisabled';

import { getAvatarTitle } from '../user/utils.js';

function PeopleList({people, follow, unfollow}) {

  return (
  <List>
  {
    people.map(user => (
    <ListItem key={user.id}>
        <ListItemAvatar>
        <Avatar alt={user.name}>
            {getAvatarTitle(user.name)}
        </Avatar>
        </ListItemAvatar>
        <ListItemText
        primary={user.name}
        />
        <ListItemSecondaryAction>
          <IconButton 
            aria-label="unfollow" 
            onClick={() => unfollow(user.id)}>
            <PersonAddDisabledIcon />
            </IconButton> 
          <IconButton 
            aria-label="unfollow" 
            onClick={() => follow(user.id)}>
            <PersonAddIcon />
            </IconButton>
        </ListItemSecondaryAction>
    </ListItem>
    ))
  }    
  </List>
  );
}

export default PeopleList;