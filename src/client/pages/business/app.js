import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

import {Navbar, Nav, FormGroup, FormControl, Form, Button, Col, Row, Grid, Thumbnail, Image } from 'react-bootstrap'

class Container extends React.Component {

  constructor(props) {
    super(props);
	  this.loadPage = this.loadPage.bind(this);
  }
	loadPage() {
		window.location.href = '/';

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
		
		<div>
			<Grid>
				<Row>
					<Col xs={6} md={3}>
						<img src="http://www.traveller.com.au/content/dam/images/g/u/n/q/h/0/image.related.articleLeadwide.620x349.gunpvd.png/1488330286332.png" rounded />
					</Col>
					<Col xs={6} md={3} xsOffset={2}>
					<Image src="http://www.traveller.com.au/content/dam/images/g/u/n/q/h/0/image.related.articleLeadwide.620x349.gunpvd.png/1488330286332.png" circle/>
					</Col>
				</Row>
					<h3>test123</h3>
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
