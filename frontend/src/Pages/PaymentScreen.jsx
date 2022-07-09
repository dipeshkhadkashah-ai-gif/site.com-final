import React, { useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import { ListGroup } from "react-bootstrap";

const Payment = () => {
  const booking = JSON.parse(localStorage.getItem("bookings"));
  const user = localStorage.getItem("user");
  const [payment, setPayment] = useState({
    name: `${booking.name}`,
    price: 3000,
  });
  const makePayment = (token) => {
    const body = {
      token,
      payment,
    };
    const header = {
      "COntent-Type": "application/json",
    };
    return fetch(`http://localhost:5000/payment`, {
      method: "POST",
      headers: header,
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="d-flex flex-column align-items-center m-5">
      <h2 className="mt-5" style={{ textAlign: "center" }}>
        Payment Page
      </h2>
      <div className=" p-5">
        <ListGroup>
          <ListGroup.Item className="m-2">
            Name: {booking.name}
          </ListGroup.Item>
          <ListGroup.Item className="m-2">
            Price: Rs.3000
          </ListGroup.Item>
          <ListGroup.Item className="m-2">
            Equipment: {booking.equipments==='Rental'? 'Rs.30000':'Rs.5000'}
          </ListGroup.Item>
        </ListGroup>
           <StripeCheckout className='m-2'
        stripeKey="pk_test_51LJfngFovhV1KGZAt3ZDfaYOafSayRqSEgeU9hPWeRoPoorSGfyGSWRp42JEIPVqofRPyAsWdycCOrvdATfXWah400NyJnfA8A"
        token={makePayment}
        name="Buy react"
      />
      </div>
   
    </div>
  );
};

export default Payment;
