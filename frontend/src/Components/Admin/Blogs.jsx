import React, { useEffect, useState } from "react";
import {
  Container,
  Form,
  FormControl,
  Button,
  Col,
  Row,
  Table,
  Modal,
  Alert,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar";

import axios from "axios";

const Blogs = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [blogs, setBlog] = useState([])

  // Whatever We put in useEffect will run as soon as components load

  const getBlogs = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/api/blogs`);
      console.log(res.data);
      setBlog(res.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    getBlogs();
  },[]);

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <Container>
        <h1 style={{ margin: "20px 0px 20px 0px" }}>Blogs</h1>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            style={{ maxWidth: "600px" }}
          />
          <Button variant="outline-success">Search</Button>
        </Form>
        <Link to="/admin/blogs/create">
          <Button>Create Blogs</Button>
        </Link>
        <Row className="mt-5 align-items-center justify-content-evenly">
          <Col md={10}>
            <Table className="table-success table-striped table-hover table-bordered">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Content</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {blogs.map((blog, key) => (
                  <tr key={key}>
                    <td>
                      <img
                        src={`/uploads/${blog.image}`}
                        style={{ height: "80px" }}
                        className="img-fluid img"
                      />
                    </td>
                    <td>{blog.title}</td>
                    <td>{blog.description.slice(0, 100)}</td>
                    <td>{blog.content.slice(0, 100)}</td>
                   
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Blogs;
