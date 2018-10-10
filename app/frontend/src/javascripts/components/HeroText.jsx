import React from "react";
import {
  Typography
} from '@material-ui/core'

export default class HeroText extends React.Component {
  render () {
    return (
      <Typography variant="display4" classes={{root: 'text-white text-center thin'}}>
        {this.props.text}
      </Typography>
    );
  }
}
