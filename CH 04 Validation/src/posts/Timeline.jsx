import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import { getAvatarTitle } from '../user/utils.js';

function Timeline({ posts }) {
  return (
  <List>
  {
    posts.map(post => (
      <React.Fragment key={post.id}>
        <ListItem alignItems="flex-start" >
          <ListItemAvatar>
            <Avatar alt={post.userName}>
              {getAvatarTitle(post.userName)}
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={post.title}
            secondary={post.content}
          />
          <ListItemSecondaryAction>
            <IconButton aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction >
        </ListItem>
        <Divider 
          variant="inset" 
          component="li" />
      </React.Fragment>
    ))
  }    
  </List>
  );
}

export default Timeline;