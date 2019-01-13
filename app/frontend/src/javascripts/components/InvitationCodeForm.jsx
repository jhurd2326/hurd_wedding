import React from "react";

import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme,
  TextField,
  Button,
  Snackbar,
  Typography,
} from "@material-ui/core"

import theme from "./Theme"
import RsvpDialog from "./RsvpDialog"

export default class InvitationCodeForm extends React.Component {
  state = {
    code: "",
    users: [],
    snackbar_open: false,
    snackbar_message: "",
    dialog_open: false,
  };

  handleCodeChange = () => event => {
    this.setState({
      users: [],
      code: event.target.value,
    });
  };

  closeSnackBar = () => {
    this.setState({
      snackbar_message: "",
      snackbar_open: false,
    });
  };

  openSnackBar = (message) => {
    this.setState({
      snackbar_message: message,
      snackbar_open: true,
    });
  };

  closeDialog = () => {
    this.setState({ dialog_open: false });
  };

  fetchRsvp = () => {
    if(this.state.users.length > 0) {
      this.setState({ dialog_open: true });
    } else {
      fetch("/rsvp_users.json?code=" + this.state.code)
      .then(response => response.json())
      .then(parsedJson => this.parseRsvp(parsedJson));
    }
  };

  parseRsvp = resp => {
    if(resp.validCode) {
      this.setState({
        dialog_open: true,
        users: JSON.parse(resp.users),
      });
    } else {
      this.openSnackBar("Oops! Nothing code be found");
    }
  };

  render () {
    return (
      <React.Fragment>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          autoHideDuration={3000}
          open={this.state.snackbar_open}
          onClose={this.closeSnackBar}
          ContentProps={{ 'aria-describedby': 'message-id' }}
          message={<span id="message-id">{this.state.snackbar_message}</span>}
        />

        <RsvpDialog users={this.state.users} open={this.state.dialog_open} closeDialog={this.closeDialog} />

        <MuiThemeProvider theme={theme}>
          <div className="mb-6">
            <TextField
              id="rsvp[code]"
              label="Code"
              value={this.state.rsvp}
              onChange={this.handleCodeChange()}
            />
          </div>
          <div className="text-center">
            <Button variant="outlined" size="small" color="primary" onClick={this.fetchRsvp}>
              Submit
            </Button>
          </div>
        </MuiThemeProvider>
      </React.Fragment>
    );
  }
}
