import React, {Component} from 'react';
import './landing.css'
import {Grid, Row, Col, Thumbnail, Button, Image} from 'react-bootstrap'
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
	
	
  clickPic(item) {
    window.location.href = '/content/' + item.content_uuid;
  }


	renderColumn(column) {
		let items = []
		let i=0;
		if (this.state && this.state.data) items = this.state.data;

		const arr =  items.filter(item => (i++ % 3 === column)).map(item => {
			let asset = <Image className="resize" src={item.fileLocation} alt="placeholder" onClick={this.clickPic.bind(this, item)} rounded/>
			return (
				<div>
				{asset}
				<p className="imgHash">{item.hashtags[0]}</p>
				</div>
			)
		});

		return arr;
	}

	//we'll have a function here for rendering search content
	//Called when this class is being created elsewhere
	render() {


		return (
			<Grid>
				<Row>
					<Col xs={6} md={4}>
						{ this.renderColumn(0)	}
					</Col>
					<Col xs={6} md={4}>
						{ this.renderColumn(1) }
					</Col>
					<Col xs={6} md={4}>
						{this.renderColumn(2) }
					</Col>
				</Row>
			</Grid>
		)
	}
}

export default UGC;
