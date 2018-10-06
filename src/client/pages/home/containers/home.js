import React from 'react';
import Landing from './landing'
import PropTypes from 'prop-types';
import Nav from '../../nav'
import './landing.css';

import {FormGroup, FormControl, Form, Button} from 'react-bootstrap'

class Home extends React.Component {

  constructor(props) {
    super(props);
	  this.state = {
		  showComponent: false,
	  };
	  this.renderComponent = this.renderComponent.bind(this);
	  this.loadPage = this.loadPage.bind(this);
	  this.openAdd = this.openAdd.bind(this);
  }
	renderComponent() {
		this.setState({
			showComponent: true,
		});
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
        <Nav />
      </div>
      <div>
        <Landing />
      </div>

    </div>
    )
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Home;
