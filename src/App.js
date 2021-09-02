import React, { createContext, useState } from 'react';
import Wrapper from './components/UI/Container/Container';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Nav, Navbar, Button } from 'react-bootstrap';
import Admin from './components/Admin/Admin';
import SearchBox from './components/SearchBox/SearchBox';
import Home from './components/Home/Home';
import Orders from './components/Orders/Orders';
import Login from './components/Login/Login';
import logo from './images/avater.png';
import shopping from './images/shopcart.png';
import PrivateRoute from './components/Private_Route/PrivateRoute';
import Checkout from './components/Checkout/Checkout';
import NotFound from './components/404/404';
import Check from './components/Check/Check';

export const UserContext = createContext()

function App() {
  document.title = 'SAFE-SHOP';

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Wrapper>
        <Router>
          <Navbar expand="lg" >
            <Navbar.Brand as={Link} to="/"><img src={logo} alt="" width={60} /> SAFE-SHOP</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll" >
              <Nav className="m-auto" style={{ maxHeight: '100px' }} navbarScroll>
                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                <Nav.Link as={Link} to="/orders">Orders</Nav.Link>
                <Nav.Link as={Link} to="/admin">Admin</Nav.Link>
                <Nav.Link as={Link} to="/checkout">Checkout <img src={shopping} alt="" width={30} /></Nav.Link>
                <Nav.Link as={Link} to="/login">
                  <Button className='btn-dark'>{loggedInUser.email ? 'Logout' : 'Login'}</Button>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <SearchBox />
          <Switch>
            <PrivateRoute path="/orders">
              <Orders />
            </PrivateRoute>
            <PrivateRoute path="/admin">
              <Admin />
            </PrivateRoute>
            <PrivateRoute path="/checkout/:id">
              <Checkout />
            </PrivateRoute>
            <PrivateRoute path="/checkout">
              <Check />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path='/home'>
              <Home />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path='*'>
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </Wrapper>
    </UserContext.Provider>
  );
}

export default App;
