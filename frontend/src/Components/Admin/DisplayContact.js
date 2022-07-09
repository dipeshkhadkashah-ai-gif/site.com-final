import React from "react"; //importing react from react 
import { Button, Col, Row } from "react-bootstrap"; //designs from reactstrap 
import Sidebar from "../Sidebar"; //side for dashboard
import ListGroup from "react-bootstrap/ListGroup";  //Listgroup for lists
import { Modal, ModalBody,ModalHeader, Table } from "reactstrap"; //using reactstrap for designs
import { useState, useEffect } from "react"; //using effects from react
import axios from "axios"; //cross connection


const DisplayContact = () => {
  const [data, setData] = useState([]);
  // Modal open state
  const [modal, setModal] = React.useState(false);

  // Toggle for Modal
  const toggle = () => setModal(!modal);


useEffect(() => {
    axios.get(`http://localhost:8080/api/contact/getcontacts`).then((result) => {
        console.log(result.data.contact);
        setData(result.data.contact)
    })
}, [])

  return (
    <div>
      <Row className="gx-0">
        
        <Col md={2}>
          <Sidebar />
        </Col>
        <Col md={8} className="p-4 gx-0">

          <h2 style={{ textAlign: "center" }}>
            <u>Contact Messages</u>
          </h2>
 
          <Table striped bordered>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>              
                <th>Phone</th>               
                <th>Description</th>               
              </tr>
            </thead>

            <tbody>
              {data.map((book, key) => (
                <tr key={key}>
                  <td>{book.name}</td>
                  <td>{book.email}</td>
                  <td>{book.phone}</td>
                  <td>{book.desc}</td>
             
                  
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </div>
  );
};

export default DisplayContact;
