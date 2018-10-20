import React from "react";
import {
  Typography
} from '@material-ui/core'

export default class CustomText extends React.Component {
  render () {
    return (
      <Typography variant={this.props.size} classes={{root: this.props.classes}}>
        {this.props.text}
      </Typography>
    );
  }
}
