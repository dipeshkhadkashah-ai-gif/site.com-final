import axios from "axios"; //for cross connection
import React, { useState } from "react"; //for react functions
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap"; //importing functions form reactstrap

const BookingUpdate = ({ id }) => {
  const [data, setData] = useState({
    name: "",
    email: "",
    address: "",
    contact: "",
    from: "",
    to: "",
  });

  //function for handle change
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  //function for update
  const handleUpdate = async (e) => {
    e.preventDefault();
    const { data: res } = await axios.put(
      `http://localhost:8080/api/booking/${id}`,
      data,
      console.log(id)
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
        placeholder="full name"
        value={data.name}
        onChange={handleUpdate}
      />

      <Label for="exampleEmail">Contact</Label>
      <Input
        type="contact"
        name="contact"
        id="contact"
        placeholder="Phone No"
        value={data.contact}
        onChange={handleUpdate}
      />

      <Label for="exampleEmail">Email</Label>
      <Input
        type="email"
        name="email"
        id="exampleEmail"
        placeholder="someone@example.com"
        value={data.email}
        onChange={handleUpdate}
      />

      <Label for="exampleEmail">Address</Label>
      <Input
        type="address"
        name="address"
        id="address"
        placeholder="address"
        value={data.address}
        onChange={handleUpdate}
      />

      <Label for="exampleEmail">From</Label>
      <Input
        type="date"
        name="from"
        id="exampleselect"
        placeholder="DD/MM/YYYY"
        value={data.from}
        onChange={handleUpdate}
      />

      <Label for="exampleEmail">To</Label>
      <Input
        type="date"
        name="to"
        id="exampleselect"
        placeholder="DD/MM/YYYY"
        value={data.to}
        onChange={handleUpdate}
      />
      <Button
        onClick={BookingUpdate}
        style={{ width: "120px", background: "blue" }}
      >
        Update
      </Button>
    </div>
  );
};

export default BookingUpdate;
