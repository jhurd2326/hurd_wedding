import React from "react";
import {
  AppBar,
  Typography,
  Menu,
  IconButton,
  Button,
  MuiThemeProvider,
} from "@material-ui/core"

import theme from "./Theme"
import SideNav from "./SideNav"
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

export default class NavBar extends React.Component {
  render () {
    let logout_button;
    if(this.props.user_logged_in == true) {
      logout_button = <div className="logout-button">
                        <a href="/logout" className={"hidden-sm-down"}>
                          <MuiThemeProvider theme={theme}>
                            <Button size="small" color="primary">
                              Logout
                            </Button>
                          </MuiThemeProvider>
                        </a>
                      </div>
    }

    return (
      <AppBar classes={{root: 'navbar'}}>
        <div className="hidden-md-up h-100">
          <SideNav user_logged_in={this.props.user_logged_in} ></SideNav>
        </div>
        <div className="nav-items-wrapper">
          <a href="#wedding-information" className={"nav-item hidden-sm-down"}>
            <Typography variant="title" classes={{root: 'nav-text'}}>
              Wedding Info
            </Typography>
          </a>

          <a href="#team" className={"nav-item hidden-sm-down"}>
            <Typography variant="title" classes={{root: 'nav-text'}}>
              The Team
            </Typography>
          </a>

          <div className="nav-logo">
            <a href="/" className="home-button" />
          </div>

          <a href="#registry" className={"nav-item hidden-sm-down"}>
            <Typography variant="title" classes={{root: 'nav-text'}}>
              Registry
            </Typography>
          </a>

          <a href="#rsvp" className={"nav-item hidden-sm-down"}>
            <Typography variant="title" classes={{root: 'nav-text'}}>
              RSVP
            </Typography>
          </a>
          {logout_button}
        </div>
      </AppBar>
    );
  }
}
