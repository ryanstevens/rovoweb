import React, {Component} from 'react';
import './landing.css'
import {Grid, Row, Col, Thumbnail, Button} from 'react-bootstrap'

class UGC extends Component {
	constructor(props) {
		super(props);
	}
	//we'll have a function here for rendering search content
	//Called when this class is being created elsewhere
	render() {
		return (
		<div>
			<Grid>
				<Row>
					<Col xs={6} md={4}>
						<Thumbnail src=".../assets/logo_login.png" alt="placeholder">
							<h3>Title of picture</h3>
							<p>Description/hashtag</p>
							<p><Button bsStyle="primary">Follow</Button>
							<Button bsStyle="default">See More</Button>
							</p>
						</Thumbnail>
					</Col>
					<Col xs={6} md={4}>
						<Thumbnail src=".../assets/logo_login.png" alt="Placeholder">
							<h3>Title of Picture</h3>
							<p>Description</p>
							<p>
							<Button bsStyle="primary">Button</Button>
							<Button bsStyle="default">Button</Button>
							</p>
						</Thumbnail>
					</Col>
					<Col xs={6} md={4}>
						<Thumbnail src=".../assets/logo_login.png" alt="Placeholder">
						<h3>Thumbnail label</h3>
						<p>Description</p>
						<p>
						<Button bsStyle="primary">Button</Button>
						<Button bsStyle="default">Button</Button>
						</p>
						</Thumbnail>
					</Col>
				</Row>
			</Grid>;
		</div>
		)
	}
}

export default UGC;
