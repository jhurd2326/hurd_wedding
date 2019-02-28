import React from "react";
import {
  TableRow,
  TableCell,
} from "@material-ui/core";

export default class RsvpTableCell extends React.Component {
  constructor(props) {
    super(props);
  }

  attendenceMarker = (attending) => {
    if(attending == true) {
      return "Yes";
    }
    else {
      return "No";
    }
  }

  rowBackgroundColor = (index) => {
    if(index % 2 == 0) {
      return "bg-charcoal-light";
    }
    else {
      return "bg-charcoal";
    }
  };

  render() {
    return (
      <TableRow classes={{root: this.rowBackgroundColor(this.props.rsvp_index)}}>
        <TableCell component="th" classes={{root: "text-white thin rsvp-cell bl-gold"}}>
          <div>{this.props.attendee.first_name + " " + this.props.attendee.last_name}</div>
        </TableCell>
        <TableCell align="right" classes={{root: "text-white thin rsvp-cell"}}>
          <div>{this.attendenceMarker(this.props.attendee.attending_wedding)}</div>
        </TableCell>
        <TableCell align="right" classes={{root: "text-white thin rsvp-cell br-gold"}}>
          <div>{this.props.attendee.rsvp_id}</div>
        </TableCell>
      </TableRow>
    );
  }
}
