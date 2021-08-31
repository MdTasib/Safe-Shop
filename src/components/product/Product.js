import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';

const Product = ({ product }) => {
  return (
    <Col xs={12} md={4} sm={6}>
      <Card>
        <Card.Img variant="top" src={product.img} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <div className="d-flex justify-content-between align-items-end">
            <Card.Title>${product.price}</Card.Title>
            <Button variant="dark">Buy Now</Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Product;