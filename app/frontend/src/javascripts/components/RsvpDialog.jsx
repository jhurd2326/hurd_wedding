import React from "react";

import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme,
  Button,
  Dialog,
  DialogContent,
  Typography,
} from "@material-ui/core"

import theme from "./Theme"
import RsvpForm from "./RsvpForm"

export default class RsvpDialog extends React.Component {
  state = {
    attendees: [],
  };

  handleChange = (index, field, value) => {
    let updated = this.state.attendees;
    updated[index][field] = value;
    this.setState({ attendees: updated });
  };

  render () {
    return (
      <Dialog
        aria-labelledby="rsvp-dialog"
        scroll="body"
        open={this.props.open}
        onClose={this.props.closeDialog}
        onEntering={() => { this.setState({ attendees: this.props.users }) }}
      >
        <DialogContent classes={{root: "rsvp-dialog"}}>
          <div className="dialog-content">
            <div className="my-8 mx-12">
              <div className="section-header mb-4">
                <Typography variant="display2" id="dialog-title" classes={{root: "text-center text-white thin"}}>
                  Information
                </Typography>
                <div className="header-underline mx-auto mt-4"></div>
              </div>
              <div className="text-center text-white thin mb-8">
                Please enter your information below
              </div>
              <MuiThemeProvider theme={theme}>
                <div className="mx-auto">

                  {this.state.attendees.map((attendee, i) => {
                    return (
                      <RsvpForm key={i} index={i} attendee={attendee} onChange={this.handleChange}/>
                    )
                  })}

                  <div className="flex">
                    <div>
                      <Button size="small" color="primary">
                        Add Guest
                      </Button>
                    </div>

                    <div className="ml-auto">
                      <Button variant="outlined" size="small" color="primary">
                        RSVP
                      </Button>
                    </div>
                  </div>
                </div>
              </MuiThemeProvider>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }
}
