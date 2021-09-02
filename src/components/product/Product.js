import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  return (
    <Col xs={12} md={4} sm={6}>
      <Card>
        <Card.Img variant="top" src={product.imageUrl} height={350} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text className='text-secondary'>{product.author}</Card.Text>
          <div className="d-flex justify-content-between align-items-end">
            <Card.Title>${product.price}</Card.Title>
            <Link to={`/checkout/${product._id}`}>
              <Button variant="dark">Buy Now</Button>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Product;