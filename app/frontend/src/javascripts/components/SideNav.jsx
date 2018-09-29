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
      <React.Fragment>
        <div className="menu-button-wrapper h-100">
          <div className="menu-button h-100">
            <IconButton onClick={this.toggleNav} className="text-white">
              <MenuIcon/>
            </IconButton>
          </div>
        </div>

        <Drawer open={this.state.isOpen} onClose={this.toggleNav} classes={{paper: 'side-nav'}}>
          <div className="side-nav-bars h-100"></div>
          <List classes={{root: 'side-nav-items'}}>
            <ListItem button={true} classes={{root: 'my-4 side-nav-item active'}}>
              <ListItemText><span className="text-white thin">Wedding Info</span></ListItemText>
            </ListItem>
            <ListItem button={true} classes={{root: 'my-4 side-nav-item'}}>
              <ListItemText><span className="text-white thin">Our Story</span></ListItemText>
            </ListItem>
            <ListItem button={true} classes={{root: 'my-4 side-nav-item'}}>
              <ListItemText><span className="text-white thin">The Venue</span></ListItemText>
            </ListItem>
            <ListItem button={true} classes={{root: 'my-4 side-nav-item'}}>
              <ListItemText><span className="text-white thin">RSVP</span></ListItemText>
            </ListItem>
          </List>
        </Drawer>
      </React.Fragment>
    );
  }
}
