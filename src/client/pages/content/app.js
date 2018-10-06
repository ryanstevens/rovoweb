import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import axios from 'axios'
import Nav from '../nav'
import Recommenders from '../recs'

import {Grid, Row, Col, Thumbnail, Button, Form, FormControl, FormGroup} from 'react-bootstrap'


// class Recommenders extends React.Component {
  
  
// 	componentDidMount() {
// 		axios.get('/four-listings').then(results => {
// 			this.setState({
//         arr: Array.prototype.slice.call(results.data)
//       });
// 		});
//   }

//   render() {
//     if (!this.state || !this.state.arr) return <span />

//     const recs = this.state.arr.map(rec => {
//       return <Col xs={6} md={3}><img class="recImg" src={rec.fileLocation} /></Col>
//     })
//     console.log("####", recs)
//     return (	<Grid>
//       <Row>
//         {recs}
//       </Row>
//     </Grid>)
//   }
// }

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
		{/* <div>
			<Button bsStyle="primary" onClick={this.loadPage}>Home Page</Button>
			<Button bsStyle="primary" onClick={this.loadBusiness.bind(this, this.state.data)}>Business Page</Button>
    </div> */}
    
        <Grid>
          <Row>
            <Col xs={6} md={6}>

                <div dangerouslySetInnerHTML={{__html: `<iframe width="570" height="320" src="https://www.youtube.com/embed/${this.state.data.video_id}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`}} alt="placeholder" />


            </Col>
            <Col xs={6} md={6}>
              <Row>
                <Col md={2}>              
                  <img src={this.state.data.user.thumb} alt="placeholder" class="userFace" />
                </Col>
                <Col md={10}>
                  <h1>{ this.state.data.user.name }</h1>
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <h3>{ this.state.data.title }</h3>
                  <p class="hashes">{ this.state.data.hashtags}</p>
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <Button className="share" block={true} bsStyle="warning">Share</Button>
                </Col>
              </Row>
              <Row >
                <Col md={8}>
                </Col>
                <Col md={4}>
                  <Button className="follow-pad" block={true} onClick={this.loadBusiness.bind(this, this.state.data)}>Follow</Button>

                </Col>
              </Row>

            </Col>
          </Row>  
          <Row className='rec-row'> 
            <Col md={12}>
              
              <Recommenders />
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

Container.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Container;
