import React from 'react';
import Landing from './landing'
import Grid from '@material-ui/core/Grid'
import PropTypes from 'prop-types';
import {Navbar, Nav, FormGroup, FormControl, Form } from 'react-bootstrap'
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  homebox: {
    height: '100px',
    width: '100%'
  }
});

class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    
    const { classes } = this.props;

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
						<FormControl type="text" placeholder="Search " className={classes.searchbar}/>
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
          <Landing />
		</div>
        </div>
    )
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
