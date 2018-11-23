import React from "react";

import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme,
  TextField,
  Button,
  Icon,
} from '@material-ui/core'

import theme from "./Theme"

export default class RsvpForm extends React.Component {
  state = { rsvp: "" };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render () {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="mb-6">
          <TextField
            id="rsvp_code"
            label="RSVP"
            value={this.state.rsvp}
            onChange={this.handleChange("rsvp")}
          />
        </div>
        <div className="text-center">
          <Button variant="outlined" size="small" color="primary">
            Submit
          </Button>
        </div>
      </MuiThemeProvider>
    );
  }
}
