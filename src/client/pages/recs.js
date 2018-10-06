import axios from 'axios'
import {Grid, Row, Col} from 'react-bootstrap'
import React from 'react';
import rec from './rec.css'

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
      return <Col xs={6} md={3}><img class="recImg" src={rec.fileLocation} onClick={() => window.location.href='/content/'+rec.content_uuid} /></Col>
    })
    return (	<Grid>
      <Row>
        {recs}
      </Row>
    </Grid>)
  }
}

export default Recommenders;