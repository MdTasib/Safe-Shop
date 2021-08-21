import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Nav, Navbar } from 'react-bootstrap';

const NavbarMenu = () => {
  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/About">About</Nav.Link>
            <Nav.Link as={Link} to="/users">Users</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <Switch>
          <Route path="/about">

          </Route>
          <Route path="/users">

          </Route>
          <Route exact path="/">

          </Route>
        </Switch>
      </Navbar>
    </Router>
  );
};

export default NavbarMenu;