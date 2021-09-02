/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ListGroup, Card, ListGroupItem, Nav, Button } from 'react-bootstrap';
import { UserContext } from '../../App';

const Checkout = () => {
  const [product, setProduct] = useState([]);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const { id } = useParams();

  useEffect(() => {
    fetch('https://thawing-refuge-75108.herokuapp.com/books')
      .then(response => response.json())
      .then(data => {
        const selectedProduct = data.find(pd => pd._id === id);
        setProduct(selectedProduct);
      })
  }, [id]);

  return (
    <Card className='w-50 m-auto my-3'>
      <Card.Img variant="top" src={product.imageUrl} height={400} />
      <Card.Body>
        <Card.Title>Name &#11177; {product.name}</Card.Title>
        <Card.Text className='text-secondary'>Author &#11177; {product.author}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Price &#11177; {product.price}</ListGroupItem>
        <ListGroupItem>User Name &#11177; {loggedInUser.name || loggedInUser.email}</ListGroupItem>
        <ListGroupItem>User Email &#11177; {loggedInUser.email}</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Button variant='dark'>
          <Nav.Link as={Link} to="/orders">ORDER NOW</Nav.Link>
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Checkout;