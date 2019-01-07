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
  handleChange(field, value) {
    this.props.onChange(this.props.index, field, value);
  };

  render () {
    return (
      <React.Fragment>
        <div className="rsvp-form-row mb-8">
          <div className="fit-content mx-4">
            <TextField
              id={"first_name_" + this.props.index}
              label="First Name"
              value={this.props.attendee.first_name}
              onChange={(e) => this.handleChange("first_name", e.target.value)}
              classes={{root: "rsvp-field"}}
            />
          </div>
          <div className="fit-content mx-4">
            <TextField
              id={"last_name_" + this.props.index}
              label="Last Name"
              value={this.props.attendee.last_name}
              onChange={(e) => this.handleChange("last_name", e.target.value)}
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
                  value={this.props.attendee.attending_rehearsal.toString()}
                  row
                >
                  <FormControlLabel
                    value="true"
                    control={<Radio color="primary" value="true" onChange={(e) => this.handleChange("attending_rehearsal", e.target.value)} />}
                    label="Yes"
                  />
                  <FormControlLabel
                    value="false"
                    control={<Radio color="primary" value="false" onChange={(e) => this.handleChange("attending_rehearsal", e.target.value)} />}
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
