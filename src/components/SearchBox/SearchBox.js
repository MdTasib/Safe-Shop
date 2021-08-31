import React from 'react';
import { Form, FormControl, Button, } from 'react-bootstrap';

const SearchBox = () => {
  return (
    <Form className="d-flex w-50 m-auto py-3 mb-4">
      <FormControl
        type="search"
        placeholder="&#128269; Search Here"
        aria-label="Search"
      />
      <Button variant="dark">Search</Button>
    </Form>
  );
};

export default SearchBox;