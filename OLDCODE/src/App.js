import React, { Component } from 'react';
import './App.css';
import UGC from './UGC/UGC'
//line 5 added from fb react bootstrap site https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#folder-structure
import { Navbar, Nav, Button, Form, Col, FormGroup, FormControl, ControlLabel, InputGroup } from 'react-bootstrap';

class App extends Component {
  render() {
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
                  <FormControl type="text"
								placeholder="Search "
								id="searchbar" onChange={this.handleChange}/>
              </FormGroup>
       	  </Navbar.Form>
	   	  <Nav pullRight>
	   	   <Button pullRight className="buttonStyle navbar-btn">Add+ Experiences</Button>
	       <Button pullRight className="buttonStyle navbar-btn">Login</Button>
	   	  </Nav>
         </Navbar.Collapse>
       </Navbar>
		</div>
		<div>
			<UGC />
		</div>
	</div>
	//section for loading diff components. Right now just login page. 
   );
 }
}

export default App;
