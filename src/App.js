import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Qlogo from './Qlogo.png'
import { Navbar, Nav, NavDropdown, Col, Row, Tab } from 'react-bootstrap';
function App() {

  var logoStyles ={
    display: 'block',
     marginLeft: 'auto',
     marginRight: 'auto',
     marginTop: 'auto',
     marginBottom: 'auto',
     justifyContent: 'center',
     width: '100%',

  }
  return (
    <div className="App">
      <img src={Qlogo} style={logoStyles} alt="logo" />
      
    <header>
  <Tab.Container id="left-tabs-example" defaultActiveKey="first">
    <Row>

      <Col sm={3}>
        <Nav className="flex-column">
          <Nav.Item>
            <Nav.Link eventKey="first">Menu</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="second">Pictures</Nav.Link>
          </Nav.Item>
        </Nav>
      </Col>
      <Col sm={9}>
        <Tab.Content>
          <Tab.Pane eventKey="first">
           menu
          </Tab.Pane>
          <Tab.Pane eventKey="second">
          pictures
          </Tab.Pane>
        </Tab.Content>
      </Col>
    </Row>
  </Tab.Container>
    </header>
    </div>
  );
}

export default App;
