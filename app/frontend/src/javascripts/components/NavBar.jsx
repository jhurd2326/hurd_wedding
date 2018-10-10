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
          <div className={"nav-item hidden-sm-down " + (this.props.active_link == "wedding_info" ? "active" : "")}>
            <Typography variant="title" classes={{root: 'nav-text'}}>
              Wedding Info
            </Typography>
          </div>

          <a href="/venue" className={"nav-item hidden-sm-down " + (this.props.active_link == "venue" ? "active" : "")}>
            <Typography variant="title" classes={{root: 'nav-text'}}>
              Venue
            </Typography>
          </a>


          <div className="nav-logo">
            <a href="/" className="home-button" />
          </div>

          <div className={"nav-item hidden-sm-down " + (this.props.active_link == "about_us" ? "active" : "")}>
            <Typography variant="title" classes={{root: 'nav-text'}}>
              About Us
            </Typography>
          </div>

          <div className={"nav-item hidden-sm-down " + (this.props.active_link == "rsvp" ? "active" : "")}>
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
