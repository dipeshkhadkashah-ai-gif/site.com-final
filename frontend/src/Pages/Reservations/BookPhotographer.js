import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

const BookPhotographer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");

  const submitBook = (e) => {
    e.preventDefault();
    const bookData = {
      name,
      email,
      contact,
    };
    axios
      .post(`http://localhost:8080/api/book/booknow`, bookData)
      .then((result) => {
        console.log(result.data);
        window.alert("Booked successfull!!");
        window.location.replace("/reservation");
      })
      .catch((err) => {
        window.alert("Failed to Book!!");
      });
  };
  return (
    <div>
      <Form className="container col-lg-4 mt-lg-5 mb-lg-5">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contact Number</Form.Label>
          <Form.Control
            type="number"
            placeholder="Number"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={submitBook}>
          Book
        </Button>
      </Form>
    </div>
  );
};

export default BookPhotographer;
