import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import axios from 'axios'
import Nav from '../nav'
import Recommenders from '../recs'


import { FormGroup, FormControl, Form, Button, Col, Row, Grid, Thumbnail, Image, ButtonGroup, Badge} from 'react-bootstrap'

class Container extends React.Component {

  constructor(props) {
    super(props);
  }

	componentDidMount() {
    
		axios.get('/four-listings').then(listings => {
        
      axios.get('/business-get/' + window.location.pathname.split('/')[2]).then(results => {
        this.setState(Object.assign({}, {content: Array.prototype.slice.call(listings.data)[0]} , results.data));
      });

		});

  }

  render() {
    
    const { classes } = this.props;

    if (!this.state) {
      return <div>loading</div>
    }

    let facepile = this.state.social.map(face => {
      return <img class='fileSize' src={face.thumb}></img>
    });

    var i=0;
    facepile = facepile.filter(face => i++ < 5);

    var claimed = (<div class='unclaimed'>Uncliamed</div>)
    console.log(this.state)
    if (this.state.status === 'claimed') {
      claimed = '';
    }

    return (
      <div>
      	<div>
          <Nav />
	      </div>
        <div>
          <Grid>
            <Row>
              <Col xs={6} md={6}>
              <div dangerouslySetInnerHTML={{__html: `<iframe width="570" height="320" src="https://www.youtube.com/embed/${this.state.content.video_id}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`}} alt="placeholder" />
         

              </Col>
              <Col xs={6} md={6}>
                <Row>
                  <Col md={3} xs={2}>
                  <img style={{width:'130px', height:'100px'}} src={this.state.image} />

                  </Col>
                  <Col  md={9} xs={10}>
                    <h1>{this.state.name}</h1>
                  </Col>
                </Row>
                <Row>
                  <Col xs={6} md={12}>
                     <h3>{this.state.address}</h3>
                  </Col>
                </Row>
                <Row>
                  <Col xs={6} md={12}>
                     {claimed}
                  </Col>
                </Row>
                <Row>
                  <Col xs={6} md={3} className="spacer">
                  </Col>
                </Row>
                <Row>
                  <Col md={3}></Col>
                  <Col md={9}>
                    <Row>
                      <Col md={4}>
                        <Badge>
                          {this.state.user_count}</Badge>
                          <p>Followers</p>
                      </Col>
                      <Col md={8}>
                        <div class="face-container">
                            {facepile}
                            <div class="clear"></div>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className='rec-row'> 
              <Col xs={12}>
              <Recommenders />
              </Col>

            </Row>
        	
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
