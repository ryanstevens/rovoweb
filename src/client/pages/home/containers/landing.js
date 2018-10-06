import React, {Component} from 'react';
// import './landing.css'
import {Grid, Row, Col, Thumbnail, Button} from 'react-bootstrap'
import axios from 'axios'

class UGC extends Component {
	constructor(props) {
		super(props);
		
	}

	componentDidMount() {
		axios.get('/listings').then(results => {
			this.setState({
				data: results.data
			});
		});
  }

	renderColumn() {
		let items = []
		if (this.state && this.state.data) items = this.state.data;

		const arr =  items.map(item => {
			return (
				<Thumbnail src={item.fileLocation} alt="placeholder">
					<h3>Title of picture</h3>
					<p>Description/hashtag</p>
					<p><Button bsStyle="primary">Follow</Button>
					<Button bsStyle="default">See More</Button>
					</p>
				</Thumbnail>
			)
		});

		return arr;
	}

	//we'll have a function here for rendering search content
	//Called when this class is being created elsewhere
	render() {
		return (
		<div>
			<Grid>
				<Row>
					<Col xs={6} md={4}>
						{ this.renderColumn()	}
						
					</Col>
				
				</Row>
			</Grid>;
		</div>
		)
	}
}

export default UGC;
