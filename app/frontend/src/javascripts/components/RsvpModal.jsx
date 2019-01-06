import React from "react";

import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme,
  Button,
  Modal,
  Typography,
} from "@material-ui/core"

import theme from "./Theme"
import RsvpForm from "./RsvpForm"

export default class RsvpModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      attendees: [
        { first_name: "", last_name: "", attending_rehearsal: "no" },
      ]
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(index, field, value) {
    let updated = this.state.attendees;
    updated[index][field] = value;
    this.setState({ attendees: updated });
  };

  render () {
    return (
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={this.props.open}
        onClose={this.props.closeModal}
      >
        <div className="rsvp-modal">
          <div className="my-8 mx-12">
            <div className="section-header mb-4">
              <Typography variant="display2" id="modal-title" classes={{root: "text-center text-white thin"}}>
                Information
              </Typography>
              <div className="header-underline mx-auto mt-4"></div>
            </div>
            <div className="text-center text-white thin mb-8">
              Please enter your information below
            </div>
            <MuiThemeProvider theme={theme}>
              <div className="fit-content mx-auto">
                {this.state.attendees.map((attendee, i) => {
                  return (
                    <RsvpForm key={i} index={i} attendee={attendee} onChange={this.handleChange}/>
                  )
                })}

                <div className="text-center">
                  <Button variant="outlined" size="small" color="primary">
                    RSVP
                  </Button>
                </div>
              </div>
            </MuiThemeProvider>
          </div>
        </div>
      </Modal>
    );
  }
}
