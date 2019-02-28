import React from "react";
import {
  createMuiTheme,
  MuiThemeProvider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Toolbar,
  Typography,
} from "@material-ui/core";

import RsvpTableRow from "./RsvpTableRow";
import SearchIcon from "@material-ui/icons/Search";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#373737",
    },
    input: {
      bottomLine: "#373737",
    },
    text: {
      primary: "#373737",
    },
  },
});

export default class RsvpTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
      attendees: this.props.attendees,
    };
  }

  updateSearch = (val) => {
    let i, j, rsvp, att;
    let filtered, updated = [];

    for(i = 0; i < this.props.attendees.length; i++){
      rsvp = this.props.attendees[i];
      filtered = [];

      for(j = 0; j < rsvp.length; j++) {
        att = rsvp[j];
        let name = att.first_name.toLowerCase() + " " + att.last_name.toLowerCase();

        if(name.includes(val.toLowerCase())) {
          filtered.push(att);
        }
      }

      if(filtered.length > 0) {
        updated.push(filtered);
      }
    }

    if(val.length < 1) {
      updated = this.props.attendees;
    }

    this.setState({
      search: val,
      attendees: updated,
    });
  };

  render() {
    return (
      <React.Fragment>
        <Toolbar classes={{root: "rsvp-header bg-gold-dark"}}>
          <Typography variant="title" classes={{root: "text-charcoal"}}>
            RSVPs
          </Typography>
          <div className="ml-auto flex">
            <div className="pt-2 mr-3">
              <SearchIcon />
            </div>
            <MuiThemeProvider theme={theme}>
              <TextField
                id="attendee-search"
                value={this.state.search}
                placeholder="Search"
                onChange={(e) => this.updateSearch(e.target.value)}
              />
            </MuiThemeProvider>
          </div>
        </Toolbar>
        <Table classes={{root: "rsvp-table"}}>
          <TableHead classes={{root: "bg-gold-dark"}}>
            <TableRow>
              <TableCell classes={{root: "text-charcoal rsvp-cell"}}>
                Name
              </TableCell>
              <TableCell align="right" classes={{root: "text-charcoal rsvp-cell"}}>
                Attending Wedding
              </TableCell>
              <TableCell align="right" classes={{root: "text-charcoal rsvp-cell"}}>
                Rsvp ID
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.attendees.map((rsvp, rsvp_index) => (
              rsvp.map((attendee, attendee_index) => (
                <RsvpTableRow
                  key={attendee.id}
                  attendee={attendee}
                  rsvp_index={rsvp_index}
                  attendee_index={attendee_index}
                />
              ))
            ))}
          </TableBody>
        </Table>
        <Toolbar classes={{root: "rsvp-footer bg-gold-dark flex"}}>
          <small className="text-charcoal">
            Total Responses: {this.props.total}
          </small>
          <small className="text-charcoal">
            Current Attendence: {this.props.attendence}
          </small>
        </Toolbar>
      </React.Fragment>
    );
  }
}
