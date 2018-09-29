import React from "react";
import {
  AppBar,
  Typography
} from '@material-ui/core'

export default class SideNav extends React.Component {
  render () {
    return (
      <AppBar classes={{root: 'navbar'}}>
        <div className="nav-items-wrapper">
          <div className="nav-item">
            <Typography variant="title" classes={{root: 'nav-text'}}>
              Wedding Info
            </Typography>
          </div>

          <div className="nav-item">
            <Typography variant="title" classes={{root: 'nav-text'}}>
              Venue
            </Typography>
          </div>

          <div className="nav-logo">
          </div>

          <div className="nav-item">
            <Typography variant="title" classes={{root: 'nav-text'}}>
              About Us
            </Typography>
          </div>

          <div className="nav-item">
            <Typography variant="title" classes={{root: 'nav-text'}}>
              RSVP
            </Typography>
          </div>
        </div>
      </AppBar>
    );
  }
}
