import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import axios from 'axios'

import {Navbar, Nav, FormGroup, FormControl, Form, Button, Col, Row, Grid, Thumbnail, Image } from 'react-bootstrap'

class Container extends React.Component {

  constructor(props) {
    super(props);
  }

	componentDidMount() {
		axios.get('/business-get/' + window.location.pathname.split('/')[2]).then(results => {
			this.setState(results.data);
		});
  }

  render() {
    
    const { classes } = this.props;

    if (!this.state) {
      return <div>loading</div>
    }

    return (
    <div>
      	<div>
			<Navbar>
				<Navbar.Header pullLeft>
					<Navbar.Brand>
						<a href="/">ROVO</a>
					</Navbar.Brand>
				</Navbar.Header>
			<Navbar.Collapse>
				<Navbar.Form pullLeft>
					<FormGroup>
						<FormControl type="text" placeholder="Search " />
					</FormGroup>
				</Navbar.Form>
				<Nav pullRight>
					<Button pullRight className="buttonStyle navbar-btn">Add+ Experience</Button>
					<Button pullRight className="buttonStyle navbar-btn">Login</Button>
			</Nav>
		</Navbar.Collapse>
		</Navbar>
	</div>
		<div>
		<Button bsStyle="primary" onClick={(() => window.location.href = '/')}>Home Page</Button>
    	</div>
		
		<div>
			<Grid>
				<Row>
					<Col xs={6} md={3}>
						<img src={this.state.image} rounded />
					</Col>
					<Col xs={6} md={3} xsOffset={2}>
					</Col>
				</Row>
					<h3>{this.state.name}</h3>
			</Grid>
		</div>

	</div>
    )
  }
}

Container.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Container;
