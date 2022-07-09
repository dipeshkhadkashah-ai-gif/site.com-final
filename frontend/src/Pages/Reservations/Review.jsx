import axios from "axios";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export const Review = ({ id }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));

  const handleSubmit = async (e) => {
    e.preventDefault();
    let headers = {
        authorization: `Bearer ${user.token}`,
        "Content-Type": "application/json",
      };
    try{
        const { data: res } = await axios.post(
            `http://localhost:8080/api/reservation/${id}/review`,
            { rating, comment },{headers}
          );
    }catch(error){
        console.log(error)
    }
  };
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="rating">
          <Form.Label>Rating</Form.Label>
          <Form.Control
            as="select"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          >
            <option value="">Select...</option>
            <option value="1">1 -Poor</option>
            <option value="2">2 -Fair</option>
            <option value="3">3 -Good</option>
            <option value="4">4 -Very Good</option>
            <option value="5">5 -Excellent</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="comment">
          <Form.Label>Comment</Form.Label>
          <Form.Control
            as="textarea"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type="submit" variant="primary">
          Submit
        </Button>
      </Form>
    </div>
  );
};
