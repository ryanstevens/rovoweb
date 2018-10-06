import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import axios from 'axios'
import Nav from '../nav'


import { FormGroup, FormControl, Form, Button, Col, Row, Grid, Thumbnail, Image, ButtonGroup, Badge} from 'react-bootstrap'

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
      return <img className='resize' src={face.thumb}></img>
    });

    return (
    <div>
      	<div>
        <Nav />
	    </div>
		<div>
		<Button bsStyle="primary" onClick={(() => window.location.href = '/')}>Home Page</Button>
    	</div>
		
		<div class="media">
			<div class="media-left">
				<img class="media-object" src={this.state.image} alt="pew"/>
			</div>
			<div class="media-body">
				<h2>Dance studio name</h2>
			</div>
		</div>

		<div>
			<Grid>
				<Row>
					<Col xs={6} md={3}>
						<img src={this.state.image} rounded />
					</Col>
					<Col xs={6} md={3} xsOffset={4}>
						<Row>
							<Col xs={6} md={3}>
								<Thumbnail href="" alt="20x20" src={this.state.image} />
							</Col>
							<Col xs={6} md={3}>
								<h4>Millenial Dance Complex</h4>
							</Col>
						</Row>
						<Row>
							<Col xs={6} md={3}>
								<h3>#hashtag1 #hashtag2 #hashtag3</h3>
							</Col>
							<h4>October 31, 2018</h4>
						</Row>
						<Row>
							<Col xs={6} md={3}>
								<p>Followers</p>
							</Col>
							<Col xs={6} md={3}>
								<Badge>42</Badge>
							</Col>
							<Col xs={6} md={3}>
								<Button>Follow</Button>
							</Col>


						</Row>
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
