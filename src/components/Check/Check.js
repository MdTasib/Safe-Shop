import React from 'react';
import { Card, Button, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Check = () => {
  return (
    <Card className='w-50 m-auto text-center'>
      <Card.Title>Please Select Your Product.</Card.Title>
      <Card.Body>
        <Button variant='dark'>
          <Nav.Link as={Link} to="/">GO BACK</Nav.Link>
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Check;