import React from 'react';
import axios from 'axios'
import './home/containers/landing.css'
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

    let LogInButton = '';
    let addButton =  '';

    if ('loggedIn' in (this.state || {})) {
      LogInButton = <Button className="buttonStyle navbar-btn" onClick={(() => window.location.href='/login/auth')}>Login</Button>
      if (this.state && this.state.thumb) {
        LogInButton = <div>{this.state.name}</div>
      }
    

      addButton = <Button className="buttonStyle navbar-btn" onClick={this.openAdd}>Add+ Experience</Button>;
      if (window.location.pathname.indexOf('share')>0) addButton = <span />
    }

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
              <FormControl type="text" placeholder="Search " id="searchbar" />
            </FormGroup>
          </Navbar.Form>
          <Nav pullRight>
            {addButton}
            {LogInButton}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}


export default NavComponent;
