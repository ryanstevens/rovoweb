import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import Nav from '../nav'


import {ControlLabel, FieldGroup, FormGroup, FormControl, Form, Button} from 'react-bootstrap'

class Container extends React.Component {

  constructor(props, context) {
    super(props, context);
	  this.state = {
		  caption: '',
		  _location: '',
		  hashtag: '',
		  url: '',
	  }
	  this.updateCaption = this.updateCaption.bind(this);
  }
	updateURL(e) {
		this.setState({url: e.target.value});
	}
	updateCaption(e) {
		this.setState({caption: e.target.value});
	}
	updateLocation(e) {
		this.setState({_location: e.target.value});
	}
	updateHashtag(e) {
		this.setState({hashtag: e.target.value});
	}
  render() {
    
    const { classes } = this.props;

    return (
    <div>
      <Nav />
      <div>
        <h1 align="center">Add Experience</h1>
      </div>
      <div>
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="formBasicText">
            <ControlLabel>Caption</ControlLabel>
            <FormControl type="text" placeholder="Say something about the photo/video" value={this.state.value} onChange={this.updateCaption}/>
          </FormGroup>
          <FormGroup controlId="formControlsSelect">
            <ControlLabel>Category</ControlLabel>
            <FormControl componentClass="select" placeholder="select">
              <option value="dance">Dance</option>
              <option value="other">Other</option>
            </FormControl>
          </FormGroup>
          <FormGroup controlId="formBasicText">
            <ControlLabel>Location</ControlLabel>
            <FormControl type="text" placeholder="Where was this taken" value = {this.state.value} onChange={this.updateLocation} />
          </FormGroup>
          <FormGroup controlId="formBasicText">
            <ControlLabel>Hashtags</ControlLabel>
            <FormControl type="text" placeholder="Add hashtags to reach new audiences" value={this.state.value} onChange={this.updateHashtag}/>
          </FormGroup>
          <FormGroup controlId="formBasicText">
            <ControlLabel>Image/Video URL</ControlLabel>
            <FormControl type="text" placeholder="Enter video/image url" value={this.state.value} onChange={this.updateURL} />
          </FormGroup>
          <Button pullright type="submit">Submit</Button>
        </form>
      </div>
    </div>
    )
  }
}

Container.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Container;
