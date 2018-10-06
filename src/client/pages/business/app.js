import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

import {Navbar, Nav, FormGroup, FormControl, Form, Button} from 'react-bootstrap'

class Container extends React.Component {

  constructor(props) {
    super(props);
	  this.loadPage = this.loadPage.bind(this);
  }
	loadPage() {
		window.open('/#');
	}
  render() {
    
    const { classes } = this.props;

    return (
    <div>
      	<div>
			<Navbar>
				<Navbar.Header pullLeft>
					<Navbar.Brand>
						<a href="#">ROVO</a>
					</Navbar.Brand>
				</Navbar.Header>
			<Navbar.Collapse>
				<Navbar.Form pullLeft>
					<FormGroup>
						<FormControl type="text" placeholder="Search " />
					</FormGroup>
				</Navbar.Form>
				<Nav pullRight>
					<Button pullRight className="buttonStyle navbar-btn">Share Experience</Button>
					<Button pullRight className="buttonStyle navbar-btn">Login</Button>
			</Nav>
		</Navbar.Collapse>
		</Navbar>
	</div>
		<div>
		<Button bsStyle="primary" onClick={this.loadPage}>Home Page</Button>
    	</div>
	</div>
    )
  }
}

Container.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Container;
