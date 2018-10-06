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

			const url = "url('"+item.fileLocation+"')";

			/*
			    width: 445px;
		height: 334px;*/

			const offset = Math.round(Math.random() *100000 % 250);
			console.log("OFFSET", offset)
			const max = 334;
			const height = max// - offset;
			const backgroundTop = 0// -1 * (offset/2);

		
			return (
				<div style={{"backgroundImage":url, backgroundPosition: 'center ' +(backgroundTop) + 'px',width: '100%', height: height + 'px', marginTop:'20px', cursor:'pointer'}} onClick={this.clickPic.bind(this, item)}>
				{/* <Image className="resize" src={item.fileLocation} alt="placeholder" onClick={this.clickPic.bind(this, item)} rounded={true} /> */}
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
		<div  className="list-grid">
			<Grid>
				<Row>
					<Col xs={4} md={4}>
						{ this.renderColumn(0)	}
					</Col>
					<Col xs={4} md={4}>
						{ this.renderColumn(1) }
					</Col>
					<Col xs={4} md={4}>
						{this.renderColumn(2) }
					</Col>
				</Row>
			</Grid>
		</div>
		)
	}
}

export default UGC;
