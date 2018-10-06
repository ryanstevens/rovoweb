import React from 'react';
import Landing from './landing'
import PropTypes from 'prop-types';
import './landing.css';
import Container from './Business'

import {Navbar, Nav, FormGroup, FormControl, Form, Button} from 'react-bootstrap'

class Home extends React.Component {

  constructor(props) {
    super(props);
	  this.state = {
		  showComponent: false,
	  };
	  this.renderComponent = this.renderComponent.bind(this);
  }
	renderComponent() {
		this.setState({
			showComponent: true,
		});
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
        <Landing />
	</div>
	<div>
		<Button bsStyle="primary" onClick={this.renderComponent}>Business Page</Button>
	</div>
    </div>
    )
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Home;
