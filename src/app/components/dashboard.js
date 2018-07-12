import React from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';


const ALL_DC = ['DC_DELHI', 'DC_BOSTON', 'DC_FRANKFURT'];

export default class Dashboard extends React.Component {
render() {
    return (
      <List>
      	{ALL_DC.map(i => <ListItem button>
          <ListItemText primary="Drafts" />
        </ListItem>)}
      </List>
    );
  }
}