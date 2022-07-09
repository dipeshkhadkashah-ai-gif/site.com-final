import React from "react"; //importing react from react
import {Button} from 'react-bootstrap'; //using bootstrap library for designs
import axios from 'axios'; //cross connection
const BookingDelete = ({id}) => {
      // Delete Booking
  const handleDelete=async()=>{
    await axios.delete(`http://localhost:8080/api/booking/${id}`).then((response)=>{
      return response.json
    })
    .then((result)=>{
      console.log("Delete successfully",result)
      window.location.reload()
    })
  
    }
  return (
      <Button
        style={{ width: "120px", background: "red" }}
        onClick={handleDelete}
        className="mb-2"
      >
        Delete
      </Button>
  );
};

export default BookingDelete;
