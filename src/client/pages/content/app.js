import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import axios from 'axios'
import {Grid, Row, Col, Thumbnail, Button} from 'react-bootstrap'


class Container extends React.Component {

  constructor(props) {
    super(props);
  }

  
	componentDidMount() {
		axios.get('/content-get/' + window.location.pathname.split('/')[2]).then(results => {
			this.setState({
				data: results.data
			});
		});
  }

  render() {
    
    const { classes } = this.props;

    if (!this.state || !this.state.data) {
      return <div>loading</div>
    }

    return (
      <div>
         <Thumbnail src={this.state.data.fileLocation} alt="placeholder">
					<h3>Title of picture</h3>
					<p>Description/hashtag</p>
				</Thumbnail>
      </div>
    )
  }
}

Container.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Container;
