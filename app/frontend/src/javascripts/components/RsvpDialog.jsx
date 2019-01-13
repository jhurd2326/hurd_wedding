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
  constructor(props) {
    super(props);

    this.state = {
      attendees: [],
    };

    this.removeAttendee = this.removeAttendee.bind(this);
  }

  handleChange = (index, field, value) => {
    let updated = this.state.attendees;
    updated[index][field] = value;
    this.setState({ attendees: updated });
  };

  addAttendee = () => {
    let new_attendee = { id: "", first_name: "", last_name: "", rsvp_id: this.props.rsvp_id,
                         attending_wedding: "false", attending_rehearsal: "false", deletable: "true" };

    this.setState(prevState => ({
      attendees: [...prevState.attendees, new_attendee]
    }));
  };

  removeAttendee = (index) => {
    let updated = [...this.state.attendees];
    updated.splice(index, 1);
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
          <div className="dialog-content mx-auto my-8">
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
              <div>

                {this.state.attendees.map((attendee, i) => {
                  return (
                    <RsvpForm
                      key={i}
                      index={i}
                      attendee={attendee}
                      onChange={this.handleChange}
                      onDelete={this.removeAttendee}
                    />
                  )
                })}

                <div className="flex">
                  <div>
                    <Button size="small" color="primary" onClick={this.addAttendee}>
                      Add Guest
                    </Button>
                  </div>
                  <div className="ml-auto">
                    <Button variant="contained" size="small" color="primary">
                      RSVP
                    </Button>
                  </div>
                </div>
              </div>
            </MuiThemeProvider>
          </div>
        </DialogContent>
      </Dialog>
    );
  }
}
