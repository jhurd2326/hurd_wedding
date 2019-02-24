import React from "react";
import axios from "axios";
import {
  TextField,
  Button,
  MuiThemeProvider,
  Snackbar,
} from "@material-ui/core"

import theme from "./Theme"

export default class AdminLogin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      snackbar_open: false,
      snackbar_message: "",
    };
  }

  handleChange = (field, value) => {
    this.setState({ [field]: value});
  };

  submitLogin = () => {
    let csrfToken = document.querySelector("meta[name=csrf-token]").content;
    axios.defaults.headers.common["X-CSRF-Token"] = csrfToken;

    axios.post("/login", { session: { username: this.state.username, password: this.state.password } })
      .then(resp => {
        if(resp.data.status == "success") {
          window.location.pathname = resp.data.redirect_to;
        }
        else {
          this.setState({
            snackbar_open: true,
            snackbar_message: resp.data.message,
          });
        }
      })
  };

  render () {
    return (
      <React.Fragment>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          open={this.state.snackbar_open}
          onClose= { () => { this.setState({snackbar_open: false}); } }
          ContentProps={{"aria-describedby": "message-id"}}
          message={<span id="message-id">{this.state.snackbar_message}</span>}
          autoHideDuration={4000}
        />

        <MuiThemeProvider theme={theme}>
          <div className="mx-auto mt-4 fit-content">
            <div className="m-2">
              <TextField
                id={"username"}
                label="Username"
                value={this.state.username}
                onChange={(e) => this.handleChange("username", e.target.value)}
              />
            </div>
            <div className="m-2">
              <TextField
                id={"password"}
                type="password"
                label="Password"
                value={this.state.password}
                onChange={(e) => this.handleChange("password", e.target.value)}
              />
            </div>
            <div className="text-center mx-auto mt-8">
              <Button variant="contained" size="small" color="primary" onClick={this.submitLogin}>
                Login
              </Button>
            </div>
          </div>
        </MuiThemeProvider>
      </React.Fragment>
    );
  }
}
