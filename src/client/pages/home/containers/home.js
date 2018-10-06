import React from 'react';
import Landing from './landing'
import PropTypes from 'prop-types';
import './home.css';
import NavComponent from '../../nav';

import {Navbar, Nav, FormGroup, FormControl, Form, Button} from 'react-bootstrap'

class Home extends React.Component {

  constructor(props) {
    super(props);
	  this.state = {
		  showComponent: false,
	  };
	  this.loadPage = this.loadPage.bind(this);
	  this.openAdd = this.openAdd.bind(this);
  }
	loadPage() {
		window.location.href = '/business';
	}
	openAdd() {
		window.location.href = '/share';
	}
  render() {
    
    const { classes } = this.props;

    return (
    <div>
		<div>
			<NavComponent />
		</div>
		<div className="landingDiv">
        	<Landing />
		</div>
		<div>
			<Button bsStyle="primary" onClick={this.loadPage}>Business Page</Button>
		</div>
    </div>
    )
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Home;
