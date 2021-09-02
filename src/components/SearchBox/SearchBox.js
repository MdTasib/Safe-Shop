/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Form, FormControl, Button, } from 'react-bootstrap';

const SearchBox = () => {
  // const [filter, setFilter] = useState('');
  // const [books, setBooks] = useState([]);

  // useEffect(() => {
  //   fetch('https://thawing-refuge-75108.herokuapp.com/books')
  //     .then(response => response.json())
  //     .then(data => setBooks(data));
  // }, []);

  // const searchProduct = (event) => {
  //   setFilter(event.target.value);
  // };

  // let dataSearch = books.filter(item => {
  //   return Object.keys(item).some(key =>
  //     item[key].toString().toLowercase().includes(filter.toString().toLowerCase())
  //   )
  // });

  return (
    <Form className="d-flex w-50 m-auto py-3 mb-4">
      <FormControl
        type="search"
        placeholder="&#128269; Search Here"
        aria-label="Search"
      // value={filter}
      // onChange={searchProduct.bind(this)}
      />
      <Button variant="dark">Search</Button>
    </Form>
  );
};

export default SearchBox;