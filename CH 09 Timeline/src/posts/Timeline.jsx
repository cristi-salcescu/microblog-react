import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import effects from './effects';
import { getAvatarTitle } from '../user/utils.js';

function Timeline({posts, user, fetchPosts, deletePost}) {

  useEffect(() => {
    fetchPosts();
  },[fetchPosts]);

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
              {
                (user.id === post.userId) && (
                  <ListItemSecondaryAction>
                    <IconButton aria-label="delete" onClick={() => deletePost(post.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                )
              }

            </ListItem>
            <Divider variant="inset" component="li" />
          </React.Fragment>
        ))
      }    
    </List>
  );
}

export default connect(
  ({posts, user}) => ({
    posts,
    user
  }), {
    ...effects
  }
)(Timeline);