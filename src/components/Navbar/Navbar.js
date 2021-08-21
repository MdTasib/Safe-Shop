import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Nav, Navbar } from 'react-bootstrap';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Orders from '../Orders/Orders';
import Admin from '../Admin/Admin';

const NavbarMenu = () => {
  return (
    <Router>
      <Navbar expand="lg">
        <Navbar.Brand href="#">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="my-2 my-lg-0 ml-auto"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/orders">Orders</Nav.Link>
            <Nav.Link as={Link} to="/admin">Admin</Nav.Link>
            <Nav.Link as={Link} to="/deals">Deals</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route path="/orders"><Orders /></Route>
        <Route path="/admin"><Admin /></Route>
        <Route path="/login"><Login /></Route>
        <Route path='/home'><Home /></Route>
        <Route exact path="/"><Home /></Route>
      </Switch>
    </Router>
  );
};

export default NavbarMenu;