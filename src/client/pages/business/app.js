import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

import {Navbar, Nav, FormGroup, FormControl, Form, Button} from 'react-bootstrap'

class Container extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    
    const { classes } = this.props;

    return (
    <div>
      sup, I'm content
    </div>
    )
  }
}

Container.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Container;
