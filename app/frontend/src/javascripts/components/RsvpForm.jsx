import React from "react";

import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme,
  TextField,
  Button,
  Snackbar,
  Modal,
  Typography,
} from '@material-ui/core'

import theme from "./Theme"

export default class RsvpForm extends React.Component {
  state = {
    rsvp_search: "",
    snackbar_open: false,
    modal_open: false,
    first_name: "",
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

        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.modal_open}
          onClose={this.closeModal}
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
                <div className="rsvp-form-row">
                  <div className="fit-content mx-auto mb-6">
                    <TextField
                      id="first_name"
                      label="First Name"
                      value={this.state.first_name}
                      onChange={this.handleChange("first_name")}
                      classes={{root: "rsvp-field"}}
                    />
                  </div>
                  <div className="fit-content mx-auto mb-6">
                    <TextField
                      id="last_name"
                      label="Last Name"
                      value={this.state.last_name}
                      onChange={this.handleChange("last_name")}
                      classes={{root: "rsvp-field"}}
                    />
                  </div>
                </div>
                <div className="text-center">
                  <Button variant="outlined" size="small" color="primary">
                    RSVP
                  </Button>
                </div>
              </MuiThemeProvider>
            </div>
          </div>
        </Modal>

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
