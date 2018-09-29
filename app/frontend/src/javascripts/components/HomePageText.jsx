import React from "react";
import {
  Typography
} from '@material-ui/core'

export default class HomePageText extends React.Component {
  render () {
    return (
      <div className="home-text-container">
        <div className="home-text-wrapper fit-content">
          <div className="fit-content">
            <div className="white-line mb-2"></div>
            <div className="gold-line mb-2"></div>
            <Typography variant="display2" classes={{root: 'home-text thin'}}>
              WE'RE
            </Typography>
          </div>
          <Typography variant="display3" classes={{root: 'home-text bold'}}>
            GETTING
          </Typography>
          <div className="fit-content">
            <Typography variant="display2" classes={{root: 'home-text thin'}}>
              MARRIED!
            </Typography>
            <div className="gold-line mt-2"></div>
            <div className="white-line mt-2"></div>
          </div>
        </div>
      </div>
    );
  }
}
