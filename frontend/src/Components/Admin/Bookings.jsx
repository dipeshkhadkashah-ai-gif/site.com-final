import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import Sidebar from "../Sidebar";
import ListGroup from "react-bootstrap/ListGroup";
import { Modal, ModalBody,ModalHeader, Table } from "reactstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BookingDelete from "./delete/BookingDelete";
import BookingUpdate from "./update/BookingUpdate";

const Bookings = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  // Modal open state
  const [modal, setModal] = React.useState(false);
  // Toggle for Modal
  const toggle = () => setModal(!modal);

  // Get Bookings
  useEffect(() => {
    const getBookings = async () => {
      const { data: response } = await axios.get(
        "http://localhost:8080/api/booking"
      );
      console.log(response);
      setData(response);
    };

    getBookings();
  }, []);

  return (
    <div>
      <Row className="gx-0">
        <Col md={2}>
          <Sidebar />
        </Col>
        <Col md={8} className="p-4 gx-0">
          <h2 style={{ textAlign: "center" }}>
            <u>Bookings</u>
          </h2>
          <Table striped bordered>
            <thead>
              <tr>
                <th>Name</th>
                <th>Contact</th>
                <th>Email</th>
                <th>Session</th>
                <th>Type</th>
                <th>From</th>
                <th>To</th>
                <th>Address</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {data.map((booking, key) => (
                <tr key={key}>
                  <td>{booking.name}</td>
                  <td>{booking.contact}</td>
                  <td>{booking.email}</td>
                  <td>{booking.session}</td>
                  <td>{booking.type}</td>
                  <td>{booking.from.split("", 10)}</td>
                  <td>{booking.to.split("", 10)}</td>
                  <td>{booking.address}</td>
                  <td>
                    <BookingDelete id={booking._id} />
                    <Button
                      onClick={toggle}
                      style={{ width: "120px", background: "blue" }}
                    >
                      Update
                    </Button>
                    <Modal isOpen={modal} toggle={toggle}>
                      <ModalHeader>Update Booking</ModalHeader>
                      <ModalBody>
                        <BookingUpdate id={booking._id} />
                      </ModalBody>
                    </Modal>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </div>
  );
};

export default Bookings;
