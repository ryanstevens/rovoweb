import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import axios from 'axios'
import Nav from '../nav'

import {Grid, Row, Col, Thumbnail, Button, Form, FormControl, FormGroup} from 'react-bootstrap'


class Recommenders extends React.Component {
  
  
	componentDidMount() {
		axios.get('/four-listings').then(results => {
			this.setState({
        arr: Array.prototype.slice.call(results.data)
      });
		});
  }

  render() {
    if (!this.state || !this.state.arr) return <span />

    const recs = this.state.arr.map(rec => {
      return <Col xs={6} md={3}><img class="recImg" src={rec.fileLocation} /></Col>
    })
    console.log("####", recs)
    return (	<Grid>
      <Row>
        {recs}
      </Row>
    </Grid>)
  }
}

class Container extends React.Component {

  constructor(props) {
    super(props);
	this.loadPage = this.loadPage.bind(this);
  }
	loadPage() {
		window.location.href = '/';
	}
	loadBusiness(item) {
		window.location.href = '/business/'+item.biz_uuid;
	}

  
	componentDidMount() {
		axios.get('/content-get/' + window.location.pathname.split('/')[2]).then(results => {
			this.setState({
				data: results.data
			});
		});
  }
	loadPage() {
		window.location.href = '/';
	}

  render() {
    
    const { classes } = this.props;

    if (!this.state || !this.state.data) {
      return <div>loading</div>
    }

    return (
      <div>
		<div>
			<Nav />
		</div>
		<div>
			<Button bsStyle="primary" onClick={this.loadPage}>Home Page</Button>
			<Button bsStyle="primary" onClick={this.loadBusiness.bind(this, this.state.data)}>Business Page</Button>
		</div>
         <Thumbnail src={this.state.data.fileLocation} alt="placeholder">
         <Thumbnail src={this.state.data.user.thumb} alt="placeholder" class="round"></Thumbnail>
					<h3>{ this.state.data.title }</h3>
					<p>Description/hashtag</p>
				</Thumbnail>
        <Recommenders />
      </div>
    )
  }
}

Container.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Container;
