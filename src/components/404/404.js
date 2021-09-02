import React from 'react';
import { Card, Button, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import not from '../../images/404.gif';

const NotFound = () => {
  return (
    <Card className='w-50 m-auto text-center'>
      <Card.Img variant="top" src={not} height={300} />
      <Card.Body>
        <Button variant='dark'>
          <Nav.Link as={Link} to="/">GO BACK</Nav.Link>
        </Button>
      </Card.Body>
    </Card>
  );
};

export default NotFound;