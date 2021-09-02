import React, { useState, useEffect } from 'react';
import Product from '../product/Product';
import { Row } from 'react-bootstrap';
import spinner from '../../images/loding.gif';

const Home = () => {
  const [books, setBooks] = useState([]);
  document.title = 'HOME';

  useEffect(() => {
    fetch('http://localhost:5000/books')
      .then(response => response.json())
      .then(data => setBooks(data));
  }, []);

  return (
    <Row xs={1} md={4} className="g-4 justify-content-md-center">
      {
        books.length > 0
          ?
          books.map(data => <Product key={data._id} product={data} />)
          :
          <img src={spinner} alt='Spinner' />
      }
    </Row>
  );
};

export default Home;