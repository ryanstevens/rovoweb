import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import axios from 'axios'
import Nav from '../nav'


import { FormGroup, FormControl, Form, Button, Col, Row, Grid, Thumbnail, Image } from 'react-bootstrap'

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

    let facepile = this.state.social.map(face => {
      return <img class='resize' src={face.thumb}></img>
    });

    return (
    <div>
      	<div>
        <Nav />
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
        {facepile}
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
