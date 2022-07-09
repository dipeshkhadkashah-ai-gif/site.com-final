import React from "react"; //importing react from react 
import { Button, Col, Row } from "react-bootstrap"; //designs from reactstrap 
import Sidebar from "../Sidebar"; //side for dashboard
import ListGroup from "react-bootstrap/ListGroup";  //Listgroup for lists
import { Modal, ModalBody,ModalHeader, Table } from "reactstrap"; //using reactstrap for designs
import { useState, useEffect } from "react"; //using effects from react
import axios from "axios"; //cross connection
import ReservationUpdate from './update/ReservationUpdate'; //importing update
import ReservationDelete from './delete/ReservationDelete'; //importing delete 


const Reservations = () => {
  const [data, setData] = useState([]);
  // Modal open state
  const [modal, setModal] = React.useState(false);
  // Toggle for Modal
  const toggle = () => setModal(!modal);

  // Get reservations
  useEffect(() => {
    const getReservations = async () => {
      const { data: response } = await axios.get(
        "http://localhost:8080/api/reservation"
      );
      console.log(response);
      setData(response);
    };

    getReservations();
  }, []);

  return (
    <div>
      <Row className="gx-0">
        
        <Col md={2}>
          <Sidebar />
        </Col>
        <Col md={8} className="p-4 gx-0">

          <h2 style={{ textAlign: "center" }}>
            <u>reservations</u>
          </h2>
          <Button className='m-3' style={{background:'black'}} onClick={()=>{window.location.href='/create/reservation'}}>
            Create

        </Button>
          <Table striped bordered>
            <thead>
              <tr>
                <th>Name</th>
                <th>role</th>
                <th>proffession</th>
                <th>experience</th>
                <th>achievement</th>
                <th>actions</th>
              </tr>
            </thead>

            <tbody>
              {data.map((reservation, key) => (
                <tr key={key}>
                  <td>{reservation.name}</td>
                  <td>{reservation.role}</td>
                  <td>{reservation.proffession}</td>
                  <td>{reservation.experience}</td>
                  <td>{reservation.achievement}</td>
             
                  <td>
                    {/* <reservationDelete id={reservation._id} /> */}
                    <Button
                      onClick={toggle}
                      style={{ width: "120px", background: "blue" }}
                    >
                      Update
                    </Button>
                    <Modal isOpen={modal} toggle={toggle}>
                      <ModalHeader>Update reservation</ModalHeader>
                      <ModalBody>
                        <reservationUpdate id={reservation._id} />
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

export default Reservations;
