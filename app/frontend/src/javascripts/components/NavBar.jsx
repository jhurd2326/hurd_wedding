import React from "react";
import {
  AppBar,
  Typography,
  Menu,
  IconButton
} from '@material-ui/core'
import SideNav from './SideNav'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export default class NavBar extends React.Component {
  render () {
    return (
      <AppBar classes={{root: 'navbar'}}>
        <div className="hidden-md-up h-100">
          <SideNav></SideNav>
        </div>

        <div className="nav-items-wrapper">
          <div className="nav-item hidden-sm-down active">
            <Typography variant="title" classes={{root: 'nav-text'}}>
              Wedding Info
            </Typography>
          </div>

          <div className="nav-item hidden-sm-down">
            <Typography variant="title" classes={{root: 'nav-text'}}>
              Venue
            </Typography>
          </div>

          <div className="nav-logo">
          </div>

          <div className="nav-item hidden-sm-down">
            <Typography variant="title" classes={{root: 'nav-text'}}>
              About Us
            </Typography>
          </div>

          <div className="nav-item hidden-sm-down">
            <Typography variant="title" classes={{root: 'nav-text'}}>
              RSVP
            </Typography>
          </div>
        </div>

        <div className="account-button-wrapper fit-content h-100">
          <div className="account-button h-100">
            <IconButton className="text-white">
              <AccountCircleIcon/>
            </IconButton>
          </div>
        </div>
      </AppBar>
    );
  }
}
