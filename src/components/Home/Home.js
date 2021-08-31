import React, { useState, useEffect } from 'react';
import fakeData from '../fakeData';
import Product from '../product/Product';
import { Row } from 'react-bootstrap';

const Home = () => {
  const [product, setProduct] = useState([]);

  return (
    <Row xs={1} md={4} className="g-4 justify-content-md-center">
      {
        fakeData.map(data => <Product key={data.id} product={data} />)
      }
    </Row>
  );
};

export default Home;