import React from "react";
import {
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Button,
  MuiThemeProvider,
} from '@material-ui/core'

import theme from "./Theme";
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
    let logout_button;
    if(this.props.user_logged_in == true) {
      logout_button = <a href="/logout">
                        <MuiThemeProvider theme={theme}>
                          <Button size="small" color="primary" classes={{root: "ml-4 mb-2"}}>
                            Logout
                          </Button>
                        </MuiThemeProvider>
                      </a>
    }

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
            <a href="#wedding-information">
              <ListItem button={true} classes={{root: 'my-4 side-nav-item'}}>
                <ListItemText><span className="text-white thin">Wedding Info</span></ListItemText>
              </ListItem>
            </a>
            <a href="#team">
              <ListItem button={true} classes={{root: 'my-4 side-nav-item'}}>
                <ListItemText><span className="text-white thin">The Team</span></ListItemText>
              </ListItem>
            </a>
            <a href="#registry">
              <ListItem button={true} classes={{root: 'my-4 side-nav-item'}}>
                <ListItemText><span className="text-white thin">Registry</span></ListItemText>
              </ListItem>
            </a>
            <a href="#rsvp">
              <ListItem button={true} classes={{root: 'my-4 side-nav-item'}}>
                <ListItemText><span className="text-white thin">RSVP</span></ListItemText>
              </ListItem>
            </a>
          </List>
          {logout_button}
        </Drawer>
      </React.Fragment>
    );
  }
}
