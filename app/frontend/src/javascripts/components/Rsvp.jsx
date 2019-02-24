import React from "react";
import axios from "axios";

import {
  MuiThemeProvider,
  Button,
  Snackbar,
} from "@material-ui/core"

import theme from "./Theme"
import RsvpForm from "./RsvpForm"

export default class Rsvp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      attendees: [{ first_name: "", last_name: "", attending_wedding: "false", deletable: "false" }],
      errors: [{first_name: false, last_name: false}],
      snackbar_open: false,
      snackbar_message: "",
    };
  }

  handleChange = (index, field, value) => {
    let updated = this.state.attendees;
    updated[index][field] = value;
    this.setState({ attendees: updated });
  };

  addAttendee = () => {
    let new_attendee = { id: "", first_name: "", last_name: "", attending_wedding: "false", deletable: "true" };

    this.setState(prevState => ({
      attendees: [...prevState.attendees, new_attendee],
      errors: [...prevState.errors, {first_name: false, last_name: false}],
    }));
  };

  removeAttendee = (index) => {
    let updated = [...this.state.attendees];
    let errors = [...this.state.errors];
    updated.splice(index, 1);
    errors.splice(index, 1);
    this.setState({
      attendees: updated,
      errors: errors,
    });
  };

  checkAndSubmit = () => {
    if(this.checkErrors() == false) {
      this.submitForm();
    }
  };

  checkErrors = () => {
    let updated = [...this.state.errors];
    let errorsPresent = false;
    this.state.attendees.map((attendee, i) => {
      updated[i]["first_name"] = attendee.first_name.length < 1
      updated[i]["last_name"] = attendee.last_name.length < 1

      if(attendee.first_name.length < 1 || attendee.last_name.length < 1) {
        errorsPresent = true;
      }
    })
    this.setState({ errors: updated });
    return errorsPresent;
  };

  submitForm = () => {
    let csrfToken = document.querySelector("meta[name=csrf-token]").content;
    axios.defaults.headers.common["X-CSRF-Token"] = csrfToken;

    axios.post("/rsvps", {rsvp: { attendees_attributes: this.state.attendees }})
      .then(resp => {
        this.setState({
          snackbar_open: true,
          snackbar_message: resp.data.message,
          attendees: [{ first_name: "", last_name: "", attending_wedding: "false", deletable: "false" }],
          errors: [{first_name: false, last_name: false}],
        });
      })
  };

  render() {
    return (
      <React.Fragment>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          open={this.state.snackbar_open}
          onClose= { () => { this.setState({snackbar_open: false}); } }
          ContentProps={{"aria-describedby": "message-id"}}
          message={<span id="message-id">{this.state.snackbar_message}</span>}
          autoHideDuration={4000}
        />


        <MuiThemeProvider theme={theme}>
          <div>

            {this.state.attendees.map((attendee, i) => {
              return (
                <RsvpForm
                  key={i}
                  index={i}
                  attendee={attendee}
                  errors={this.state.errors[i]}
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
                <Button variant="contained" size="small" color="primary" onClick={this.checkAndSubmit}>
                  RSVP
                </Button>
              </div>
            </div>
          </div>
        </MuiThemeProvider>
      </React.Fragment>
    );
  }
}
