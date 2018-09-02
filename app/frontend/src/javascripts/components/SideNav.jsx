import React from "react";
import {
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText
} from '@material-ui/core'

import MenuIcon from '@material-ui/icons/Menu';

export default class SideNav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    }

    this.toggleNav = () => {
      this.setState({
        isOpen: !this.state.isOpen
      })
    }
  }

  render () {
    return (
      <div className="h-0">
        <IconButton onClick={this.toggleNav} className="menu-button">
          <MenuIcon/>
        </IconButton>

        <Drawer open={this.state.isOpen} onClose={this.toggleNav}>
          <List disablePadding={true} classes={{root: 'side-nav'}}>
            <div className="nav-logo"/>
            <ListItem button={true}>
              <ListItemText>Home</ListItemText>
            </ListItem>
            <ListItem button={true}>
              <ListItemText>Our Story</ListItemText>
            </ListItem>
            <ListItem button={true}>
              <ListItemText>The Venue</ListItemText>
            </ListItem>
            <ListItem button={true}>
              <ListItemText>RSVP</ListItemText>
            </ListItem>
          </List>
        </Drawer>
      </div>
    );
  }
}
