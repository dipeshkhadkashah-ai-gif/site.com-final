import axios from "axios"; //cross connection
import React, { useState } from "react"; //for react functions
import { Button, Form, FormGroup, Label, Input, FormText} from "reactstrap";

const ReservationUpdate = ({ id }) => {
    const [data, setData] = useState({
        name: "",
        role: "",
        proffession: "",
        experience: "",
        achievement: "",
    });

    //function for Handle Change
    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    //function for update
    const handleUpdate = async (e) => {
        e.preventDefault();
        const { data: res } = await axios.put(
            `http://localhost:8080/api/reservation/${id}`,
            data
        );
        console.log(res);
    };

    return ( 
        <div>
            <Label for="exampleEmail">Name</Label>
            <Input
            type="name"
            name="name"
            id="name"
            placeholder="Full Name"
            value={data.name}
            onChange={handleChange}
            />

            <Button
            onClick={handleUpdate}
            style={{ width: "120px", background: "blue" }}
            >
                Update
            </Button>

        </div>
    );
};

export default ReservationUpdate;