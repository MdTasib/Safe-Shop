/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import { UserContext } from '../../App';
import orderCompelte from '../../images/order.gif';

const Orders = () => {
  document.title = 'ORDER COMPLETE';
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <Card className='w-50 m-auto my-3'>
      <Card.Img variant="top" src={orderCompelte} height={400} />
      <Card.Body>
        <Card.Title className='text-success text-center'>Thanks {loggedInUser.name}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default Orders;