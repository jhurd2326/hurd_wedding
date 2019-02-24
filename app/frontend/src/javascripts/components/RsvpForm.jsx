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
  errorText = (errorPresent) => {
    if(errorPresent == true) {
      return "can't be blank"
    }
    else {
      return " "
    }
  };

  handleChange = (field, value) => {
    this.props.onChange(this.props.index, field, value);
  };

  handleDelete = () => {
    this.props.onDelete(this.props.index);
  }

  render () {
    let delete_button;
    if(this.props.attendee.deletable == "true") {
      delete_button = <div className="text-gold position-absolute round user-delete" onClick={this.handleDelete}>
                        <div className="pt-1">
                          x
                        </div>
                      </div>
    }

    return (
      <div className="mb-8 mx-auto fit-content">
        <div className="flex position-relative">
          <div className="mx-2">
            <TextField
              id={"first_name_" + this.props.index}
              label="First Name"
              value={this.props.attendee.first_name}
              onChange={(e) => this.handleChange("first_name", e.target.value)}
              classes={{root: "rsvp-field"}}
              error={this.props.errors.first_name}
              helperText={this.errorText(this.props.errors.first_name)}
            />
          </div>
          <div className="mx-2">
            <TextField
              id={"last_name_" + this.props.index}
              label="Last Name"
              value={this.props.attendee.last_name}
              onChange={(e) => this.handleChange("last_name", e.target.value)}
              classes={{root: "rsvp-field"}}
              error={this.props.errors.last_name}
              helperText={this.errorText(this.props.errors.last_name)}
            />
          </div>
          {delete_button}
        </div>
        <table className="mx-auto">
          <tbody>
            <tr>
              <td><small className="text-gold thin">Will you be attending the wedding?</small></td>
              <td className="pl-3">
                <FormControl component="fieldset">
                  <RadioGroup
                    value={this.props.attendee.attending_wedding.toString()}
                    row
                  >
                    <FormControlLabel
                      value="true"
                      control={<Radio color="primary" value="true" onChange={(e) => this.handleChange("attending_wedding", e.target.value)} />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value="false"
                      control={<Radio color="primary" value="false" onChange={(e) => this.handleChange("attending_wedding", e.target.value)} />}
                      label="No"
                    />
                  </RadioGroup>
                </FormControl>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
