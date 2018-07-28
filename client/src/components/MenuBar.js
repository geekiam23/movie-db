import React, { Component } from 'react';
import Input from '@material-ui/core/Input';

export default class MenuBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    return (
      <div className="movie-review-header mdl-layout__header mdl-layout__header--waterfall" id="top" >
        <div className="mdl-layout__header-row">
          <div className="movie-review-header-spacer mdl-layout-spacer"></div>
          <Input
            placeholder="Search Here!"
            inputProps={{
              'aria-label': 'Description',
            }}
          />
        </div>
      </div>
    )
  }
}