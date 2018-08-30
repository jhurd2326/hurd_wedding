import React from "react";
import {
  IconButton,
  Drawer
} from '@material-ui/core'

import MenuIcon from '@material-ui/icons/Menu';

export default class SideNav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    }

    this.toggleNav = () => {
      this.setState({
        isOpen: !this.state.isOpen
      })
    }
  }

  render () {
    return (
      <React.Fragment>
        <IconButton onClick={this.toggleNav}>
          <MenuIcon/>
        </IconButton>

        <Drawer open={this.state.isOpen} onClose={this.toggleNav}>
          Test
        </Drawer>
      </React.Fragment>
    );
  }
}
