import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import axios from 'axios'
import {Grid, Row, Col, Thumbnail, Button, Form, FormControl, FormGroup, Nav, Navbar} from 'react-bootstrap'


class Container extends React.Component {

  constructor(props) {
    super(props);
	this.loadPage = this.loadPage.bind(this);
  }
	loadPage() {
		window.open('/#');
	}

  
	componentDidMount() {
		axios.get('/content-get/' + window.location.pathname.split('/')[2]).then(results => {
			this.setState({
				data: results.data
			});
		});
  }
	loadPage() {
		window.open('/#');
	}

  render() {
    
    const { classes } = this.props;

    if (!this.state || !this.state.data) {
      return <div>loading</div>
    }

    return (
      <div>
		<div>
			<Navbar>
				<Navbar.Header pullLeft>
					<Navbar.Brand>
						<a href="#">ROVO</a>
					</Navbar.Brand>
				</Navbar.Header>
				<Navbar.Collapse>
					<Navbar.Form pullLeft>
						<FormGroup>
							<FormControl type="text" placeholder="Search " />
						</FormGroup>
					</Navbar.Form>
					<Nav pullRight>
						<Button pullRight className="buttonStyle navbar-btn">Share Experience</Button>
						<Button pullRight className="buttonStyle navbar-btn">Login</Button>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
		<div>
			<Button bsStyle="primary" onClick={this.loadPage}>Home Page</Button>
		</div>
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
