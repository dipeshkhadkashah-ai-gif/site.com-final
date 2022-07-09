import React, { useState } from "react";
import { Row, Form, Button, Col } from "react-bootstrap";
import axios from "axios";

const CreateBooking = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("address", address);
      formData.append("contact", contact);

      setName("");
      setEmail("");
      setAddress("");
      setContact("");

      const { data: res } = await axios.post(
        "http://locahost:8080/api/booking/create",
        formData);
        console.log(res)
    } catch (error) {
      console.log(error)
      setError(error)


    }
  };
  return (
    <Row>
      <Col md={8}>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="address">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="address"
              placeholder="Enter address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="contact">
            <Form.Label>Contact</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Contact"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            ></Form.Control>
          </Form.Group>
          {error && <h2>{error}</h2>}
          <Button style={{backgroundColor:'blue'}} type="submit" className="btn btn-primary">
              Submit
            </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default CreateBooking;
