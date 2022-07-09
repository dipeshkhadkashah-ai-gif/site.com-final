import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

const Management = () => {
  const [experience, setExperience] = useState("");
  const [skill, setSkill] = useState("");
  const [hour, setHour] = useState("");

  const submitJob = (e) => {
    e.preventDefault();
    const jobData = {
      experience,
      skill,
      hour,
    };
    axios
      .post(`http://localhost:8080/api/job/createjob`, jobData)
      .then((result) => {
        console.log(result.data);
        window.alert("Job added successfull!!");
        window.location.replace("/job");
      })
      .catch((err) => {
        window.alert("Failed to Add Job!!");
      });
  };
  return (
    <Form className="container col-lg-4 mt-lg-5 mb-lg-5">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Experience</Form.Label>
          <Form.Control
            type="String"
            placeholder="Enter your Experience"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          />
        </Form.Group>
        <Form.Label>Skill</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your Skill"
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Working Hours</Form.Label>
        <Form.Control
          type="text"
          placeholder="Working Hours"
          value={hour}
          onChange={(e) => setHour(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={submitJob}>
        Apply
      </Button>
    </Form>
  );
};

export default Management;
