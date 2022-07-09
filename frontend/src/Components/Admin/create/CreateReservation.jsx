import React, { useState } from "react";
import { Row, Form, Button, Col } from "react-bootstrap"; //for designs
import axios from "axios"; //cross connection

const CreateReservation = () => {
  //   const [name, setName] = useState("");
  //   const [role, setRole] = useState("");
  //   const [proffession, setProffession] = useState("");
  //   const [experience, setExperience] = useState("");
  //   const [achievement, setAchievement] = useState("");
    const [error, setError] = useState("");
  // const [data, setData] = useState({
  //   name: "",
  //   role: "",
  //   experience: "",
  //   achievement: "",
  //   proffession: "",
  //   image:""
  // });
  const [name,setName]=useState("")
  const [role,setRole]=useState("")
  const [experience,setExperience]=useState("")
  const [proffession,setProffession]=useState("")
  const [achievement,setAchievement]=useState("")
  const [image,setImage]=useState("")
  const handleFile = (e) => {
    setImage(e.target.files[0]);
  };


  // const handleChange = ({ currentTarget: input }) => {
  //   setData({ ...data, [input.name]: input.value });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("role", role);
      formData.append("proffession", proffession);
      formData.append("experience", experience);
      formData.append("achievement", achievement);
      formData.append("image", image);

      setName("");
      setRole("");
      setAchievement("");
      setExperience("");
      setProffession("");

      const url = "http://localhost:8080/api/reservation/create";
      const { data: res } = await axios.post(url, formData);
      console.log(res);
      // window.location = "/";
    } catch (error) {
      setError('error');
      console.log(error)
    }
  };
  return (
    <Row className="m-5">
      <Col md={8}>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              name="name"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Role</Form.Label>
            <Form.Control
              type="text"
              name="role"
              placeholder="Enter role"
              value={role}
              onChange={(e) => setRole(e.target.value)}            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="address">
            <Form.Label>Profession</Form.Label>
            <Form.Control
              type="text"
              name="proffession"
              placeholder="Enter profession"
              value={proffession}
              onChange={(e) => setProffession(e.target.value)}            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="contact">
            <Form.Label>Experience</Form.Label>
            <Form.Control
              type="text"
              name="experience"
              placeholder="Enter Experience"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="contact">
            <Form.Label>Achievement</Form.Label>
            <Form.Control
              type="text"
              name='achievement'
              placeholder="Enter Achievement"
              value={achievement}
              onChange={(e) => setAchievement(e.target.value)}            ></Form.Control>
          </Form.Group>
          <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Upload an Image
              </label>
              <input
                type="file"
                filname="image"
                className="form-control-file"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                // name="image"
                onChange={handleFile}
              />
            </div>
          <Button
            style={{ backgroundColor: "blue" }}
            type="submit"
            className="btn btn-primary"
          >
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default CreateReservation;
