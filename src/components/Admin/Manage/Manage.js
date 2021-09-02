import React, { useState, useEffect } from 'react';
import { Card, Table } from 'react-bootstrap';
import spinner from '../../../images/loding.gif';
import remove from '../../../images/delete.png';

const Manage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('https://thawing-refuge-75108.herokuapp.com/books')
      .then(response => response.json())
      .then(data => setBooks(data));
  }, []);

  // delete book
  const deleteBook = (book, id) => {
    fetch(`https://thawing-refuge-75108.herokuapp.com/deleteBook/${id}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(result => alert(`Delete Book succesfully.. You can't find it in your home page`));
  };

  return (
    <Card>
      <Card.Header>Manage Books</Card.Header>
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
                          onClick={() => deleteBook(book, book._id)}
                          src={remove}
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

export default Manage;