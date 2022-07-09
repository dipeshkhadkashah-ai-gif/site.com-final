import React from "react"; //importing react from react 
import { Button, Col, Row } from "react-bootstrap"; //designs from reactstrap 
import Sidebar from "../Sidebar"; //side for dashboard
import ListGroup from "react-bootstrap/ListGroup";  //Listgroup for lists
import { Modal, ModalBody,ModalHeader, Table } from "reactstrap"; //using reactstrap for designs
import { useState, useEffect } from "react"; //using effects from react
import axios from "axios"; //cross connection
// import bookUpdate from './update/bookUpdate'; //importing update
// import bookDelete from './delete/bookDelete'; //importing delete 


const DisplayPhotographer = () => {
  const [data, setData] = useState([]);
  // Modal open state
  const [modal, setModal] = React.useState(false);


  const deleteBook = (bid) => {
    // window.alert(bid)
    window.alert("Are you sure you want to delete this booking?");
    try {
        axios.delete(`http://localhost:8080/api/book/${bid}`);
        window.alert("Book deleted!")
        window.location.replace('/admin/book')
    } catch (error) {
        console.log(error)
    }
    
}
  // Toggle for Modal
  const toggle = () => setModal(!modal);


useEffect(() => {
    axios.get(`http://localhost:8080/api/book/bookings`).then((result) => {
        console.log(result.data.book);
        setData(result.data.book)
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
            <u>books</u>
          </h2>
 
          <Table striped bordered>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Contact</th>               
              </tr>
            </thead>

            <tbody>
              {data.map((book, key) => (
                <tr key={key}>
                  <td>{book.name}</td>
                  <td>{book.email}</td>
                  <td>{book.contact}</td>
             
                  <td>
                    {/* <bookDelete id={book._id} /> */}
                    <Button
                      onClick={()=> deleteBook(book._id)}
                      style={{ width: "120px", background: "red" }}
                    >
                      Delete
                    </Button>
                    
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

export default DisplayPhotographer;
