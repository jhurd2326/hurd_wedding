import React from "react";

import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme,
  TextField,
  Button,
  Modal,
  Typography,
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core"

import {
  RadioButtonUncheckedIcon,
  RadioButtonCheckedIcon,
} from "@material-ui/icons"

import theme from "./Theme"

export default class RsvpModal extends React.Component {
  state = {
    first_name: "",
    last_name: "",
    attending_rehearsal: "no",
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render () {
    console.log(this.state.attending_rehearsal)
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
                <div className="rsvp-form-row mb-8">
                  <div className="fit-content mx-4">
                    <TextField
                      id="first_name"
                      label="First Name"
                      value={this.state.first_name}
                      onChange={this.handleChange("first_name")}
                      classes={{root: "rsvp-field"}}
                    />
                  </div>
                  <div className="fit-content mx-4">
                    <TextField
                      id="last_name"
                      label="Last Name"
                      value={this.state.last_name}
                      onChange={this.handleChange("last_name")}
                      classes={{root: "rsvp-field"}}
                    />
                  </div>
                </div>
                < div className="rsvp-form-row">
                  <div className="mx-4 mb-6">
                    <div className="text-gold thin"><small>Will you be attending the rehearsal dinner?</small></div>
                    <div>
                      <FormControl component="fieldset">
                        <RadioGroup
                          value={this.state.attending_rehearsal}
                          row
                        >
                          <FormControlLabel
                            value="yes"
                            control={<Radio color="primary" value="yes" onChange={this.handleChange("attending_rehearsal")} />}
                            label="Yes"
                          />
                          <FormControlLabel
                            value="no"
                            control={<Radio color="primary" value="no" onChange={this.handleChange("attending_rehearsal")} />}
                            label="No"
                          />
                        </RadioGroup>
                      </FormControl>
                    </div>
                  </div>
                </div>
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
