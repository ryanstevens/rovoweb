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
      return <img class='fileSize' src={face.thumb}></img>
    });

    var i=0;
    facepile = facepile.filter(face => i++ < 5);

    return (
      <div>
      	<div>
          <Nav />
	      </div>
        <div>
          <Grid>
            <Row>
              <Col xs={6} md={3}>
                <img src={this.state.image} />
              </Col>
              <Col xs={6} md={3} xsOffset={4}>
                <Row>
                  <Col xs={12}>
                    <h3>{this.state.name}</h3>
                  </Col>
                </Row>
                <Row>
                  <Col xs={6} md={3}>
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
                  {/* <Col xs={6} md={3}>
                    <Button>Follow</Button>
                  </Col> */}
                </Row>
                <Row xs={20}>

                  <Col xs={12}>
                    <div class="face-container">
                        {facepile}


                      <div class="clear"></div>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col xs={12} className="face-row">
              
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
