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
import RsvpModal from "./RsvpModal"

export default class RsvpForm extends React.Component {
  state = {
    rsvp_search: "",
    snackbar_open: false,
    modal_open: false,
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  closeSnackBar = () => {
    this.setState({ snackbar_open: false });
  };

  openSnackBar = () => {
    this.setState({ snackbar_open: true});
  };

  closeModal = () => {
    this.setState({ modal_open: false });
  };

  openModal = () => {
    this.setState({ modal_open: true});
  };

  render () {
    return (
      <React.Fragment>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          open={this.state.snackbar_open}
          onClose={this.closeSnackBar}
          ContentProps={{ 'aria-describedby': 'message-id' }}
          message={<span id="message-id">Nothing could be found</span>}
        />

        <RsvpModal open={this.state.modal_open} closeModal={this.closeModal} />

        <MuiThemeProvider theme={theme}>
          <div className="mb-6">
            <TextField
              id="rsvp_search"
              label="Code"
              value={this.state.rsvp}
              onChange={this.handleChange("rsvp_search")}
            />
          </div>
          <div className="text-center">
            <Button variant="outlined" size="small" color="primary" onClick={this.openModal}>
              Submit
            </Button>
          </div>
        </MuiThemeProvider>
      </React.Fragment>
    );
  }
}
