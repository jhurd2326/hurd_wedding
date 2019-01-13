import React from "react";

import {
  TextField,
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
  Button
} from "@material-ui/core"

import {
  RadioButtonUncheckedIcon,
  RadioButtonCheckedIcon,
} from "@material-ui/icons"

export default class RsvpForm extends React.Component {
  handleChange = (field, value) => {
    this.props.onChange(this.props.index, field, value);
  };

  handleDelete = () => {
    this.props.onDelete(this.props.index);
  }

  render () {
    let delete_button;
    if(this.props.attendee.deletable == "true") {
      delete_button = <div className="text-center">
                        <Button size="small" color="primary" onClick={this.handleDelete}>
                          Remove
                        </Button>
                      </div>
    }

    return (
      <div className="mb-8">
        <table className="mx-auto">
          <tbody>
            <tr>
              <td>
                <TextField
                  id={"first_name_" + this.props.index}
                  label="First Name"
                  value={this.props.attendee.first_name}
                  onChange={(e) => this.handleChange("first_name", e.target.value)}
                  classes={{root: "rsvp-field"}}
                  disabled={!(this.props.attendee.deletable)}
                />
              </td>
              <td>
                <TextField
                  id={"last_name_" + this.props.index}
                  label="Last Name"
                  value={this.props.attendee.last_name}
                  onChange={(e) => this.handleChange("last_name", e.target.value)}
                  classes={{root: "rsvp-field"}}
                  disabled={!(this.props.attendee.deletable)}
                />
              </td>
            </tr>

            <tr>
              <td className="text-gold thin"><small>Will you be attending the wedding?</small></td>
              <td className="radio-buttons">
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

            <tr>
              <td className="text-gold thin"><small>Will you be attending the rehearsal dinner?</small></td>
              <td className="radio-buttons">
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
              </td>
            </tr>

          </tbody>
        </table>
        {delete_button}
      </div>
    );
  }
}
