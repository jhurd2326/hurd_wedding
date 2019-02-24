import React from "react";

import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme,
  Button,
} from "@material-ui/core"

import theme from "./Theme"
import RsvpForm from "./RsvpForm"

export default class Rsvp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      attendees: [{ first_name: "", last_name: "", attending_wedding: "false", deletable: "false" }],
      errors: [{first_name: false, last_name: false}],
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
    this.checkErrors();
  };

  checkErrors = () => {
    let updated = [...this.state.errors];
    this.state.attendees.map((attendee, i) => {
      updated[i]["first_name"] = attendee.first_name.length < 1
      updated[i]["last_name"] = attendee.last_name.length < 1
    })
    this.setState({ errors: updated });
  };

  render() {
    return (
      <React.Fragment>
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
