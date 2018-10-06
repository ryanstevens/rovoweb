import React from 'react';
import axios from 'axios'

import {Navbar, Nav, FormGroup, FormControl, Form, Button} from 'react-bootstrap'

class NavComponent extends React.Component {

  constructor(props) {
    super(props);
	  this.openAdd = this.openAdd.bind(this);
  }
  
	componentDidMount() {
		axios.get('/login/user').then(results => {
			this.setState(results.data);
		});
  }

	openAdd() {
		window.location.href = '/share';
	}
  render() {
    
    const { classes } = this.props;

    return (
      <Navbar>
        <Navbar.Header pullLeft>
          <Navbar.Brand>
            <a href="/">ROVO</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Collapse>
          <Navbar.Form pullLeft>
            <FormGroup>
              <FormControl type="text" placeholder="Search " />
            </FormGroup>
          </Navbar.Form>
          <Nav pullRight>
            <Button pullRight className="buttonStyle navbar-btn" onClick={this.openAdd}>Add+ Experience</Button>
            <Button pullRight className="buttonStyle navbar-btn" onClick={(() => window.location.href='/login/auth')}>Login</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}


export default NavComponent;
