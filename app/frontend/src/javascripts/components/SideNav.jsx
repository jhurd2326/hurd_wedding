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
      <div>
        <div className="menu-button-wrapper">
          <div className="menu-button-container text-center">
            <IconButton onClick={this.toggleNav} className="menu-button">
              <MenuIcon/>
            </IconButton>
          </div>
          <div className="menu-label-container text-center text-white">
            <h3 className="menu-label">The Hurds</h3>
          </div>
        </div>

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
