import React from "react";
import {Button} from 'react-bootstrap'; //importing button from reactstrap 
import axios from 'axios'; //for cross connection

const ReservationDelete = ({id}) => {
    //Delete Reservation
    const handleDelete = async () => {
        await axios.delete(`http://localhost:8080/api/reservation/${id}`).then((response)=> {
            return response.json
        })
        .then((result) => {
            console.log("Delete successfully", result)
            window.location.reload()
        })
    }
    return (
        <Button
        style={{ width: "120px", background: "red" }}
        onclick={handleDelete}
        className="mb-2"
        >
            Delete
        </Button>
    );
};

export default ReservationDelete;