import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { Card, Form, Row, Col } from 'react-bootstrap';

const Add = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [imageUrl, setImageUrl] = useState('');
  console.log(imageUrl);

  const onSubmit = data => {
    let eventData = {
      name: data.name,
      author: data.author,
      price: data.price,
      imageUrl: imageUrl,
    }

    console.log(eventData);

    const url = `https://thawing-refuge-75108.herokuapp.com/addBook`;
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(eventData)
    })
      .then(res => {
        console.log('server response', res);
      })
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];

    const imageData = new FormData();
    imageData.set('key', 'eb7bb93d7839539a8bddb41471f7e0da');
    imageData.append('image', file);

    axios.post('https://api.imgbb.com/1/upload', imageData)
      .then(res => {
        console.log(res);
        setImageUrl(res.data?.data?.display_url);
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <Card>
      <Card.Header>Add Books</Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col className='col-md-6 py-2'>
              <Form.Group>
                <Form.Label>Book Name</Form.Label>
                <Form.Control
                  name='name'
                  className='form-control'
                  defaultValue="" {...register("name")}
                  placeholder='Enter Name'
                />
              </Form.Group>
            </Col>
            <Col className='col-md-6 py-2'>
              <Form.Group>
                <Form.Label>Author Name</Form.Label>
                <Form.Control
                  name='author'
                  className='form-control'
                  defaultValue="" {...register("author")}
                  placeholder='Enter Name'
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col className='col-md-6 py-2'>
              <Form.Group>
                <Form.Label>Add Price</Form.Label>
                <Form.Control
                  name='price'
                  className='form-control'
                  defaultValue="" {...register("price")}
                  placeholder='Enter Name'
                />
              </Form.Group>
            </Col>

            <Col className='col-md-6 py-2'>
              <Form.Group>
                <Form.Label>Add Book Cover Photo</Form.Label>
                <Form.Control
                  onChange={handleImageUpload}
                  type='file'
                  className='form-control'
                // {...register("exampleRequired", { required: true })}
                />
                {errors.exampleRequired && <span>This field is required</span>}
              </Form.Group>
            </Col>

            <Form.Control
              className='btn btn-dark mt-3 w-50 m-auto'
              type="submit"
            />
          </Row>
        </Form>
      </Card.Body>
    </Card >
  );
};

export default Add;