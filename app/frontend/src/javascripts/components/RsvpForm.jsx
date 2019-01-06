import React from "react";

import {
  TextField,
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

export default class RsvpForm extends React.Component {
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
    return (
      <React.Fragment>
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
      </React.Fragment>
    );
  }
}
