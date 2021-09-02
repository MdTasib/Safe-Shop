import React, { useState, useEffect } from 'react';
import { Card, Table } from 'react-bootstrap';
import spinner from '../../../images/loding.gif';
import edit from '../../../images/edit2.png';

const Edit = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('https://thawing-refuge-75108.herokuapp.com/books')
      .then(response => response.json())
      .then(data => setBooks(data));
  }, []);

  const message = () => {
    alert('Does not Update.. But Feature Comeing soon.')
  }

  return (
    <Card>
      <Card.Header>Edit Books</Card.Header>
      <Card.Body>
        {
          books.length > 0
            ?
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>Book Name</th>
                  <th>Author Name</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  books.map(book => (
                    <tr key={book._id}>
                      <td>{book.name}</td>
                      <td>{book.author}</td>
                      <td>${book.price}</td>
                      <td className='text-center'>
                        <img
                          onClick={() => message()}
                          src={edit}
                          alt=""
                          width={30}
                          style={{ cursor: 'pointer' }}
                        />
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </Table>
            :
            <img src={spinner} alt="" />
        }
      </Card.Body>
    </Card>
  );
};

export default Edit;