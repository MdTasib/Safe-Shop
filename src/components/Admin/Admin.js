import React from 'react';
import { Row, Col, Nav, Navbar } from 'react-bootstrap';
import { Link, Switch, Route } from 'react-router-dom';
import logo from '../../images/avater.png';
import manage from '../../images/grid 1.png';
import add from '../../images/plus 1.png';
import edit from '../../images/edit 1.png';
import Manage from './Manage/Manage';
import Add from './Add/Add';
import Edit from './Edit/Edit';

const Admin = () => {
  document.title = 'ADMIN PAGE';

  return (
    <Row>
      <Col className='col-md-4 bg-dark p-3'>
        <Navbar.Brand as={Link} to="/"><img src={logo} alt="" width={60} /> SAFE-SHOP</Navbar.Brand>
        <Nav.Link as={Link} to="/admin"><img src={manage} alt="" width={40} /> Manage Book</Nav.Link>
        <Nav.Link as={Link} to="/admin/add"><img src={add} alt="" width={40} /> Add Book</Nav.Link>
        <Nav.Link as={Link} to="/admin/edit"><img src={edit} alt="" width={40} /> Edit Book</Nav.Link>
      </Col>

      <Col className='col-md-8 bg-light p-3'>
        <Switch>
          <Route path="/admin/add"><Add /></Route>
          <Route path="/admin/edit"><Edit /></Route>
          <Route path="/admin"><Manage /></Route>
        </Switch>
      </Col>
    </Row>
  );
};

export default Admin;