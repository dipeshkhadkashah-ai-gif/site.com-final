import React, { useState } from "react"; //importing react form react
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap"; //importing functions form reactstrap
import styles from "./styles.module.css"; //importing styles from style.css
import axios from "axios";
//import Calendar from "react-calendar"; //importing a calendar from react-calendar
//import video1 from "../../video/video1.mp4"; //importing video for background
import H5 from "../../images/H5.jpg"; //importing image for background
import { useNavigate } from "react-router-dom";
//import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";

export default function Booking() {
  const [data, setData] = useState({
    email: "",
    name: "",
    address: "",
    contact: "",
    equipments: "",
    session: "",
    type: "",
    from: "",
    to: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [message, setMessage] = useState("");

  // const ReactCalendar = () => {
  //   const [date, setDate] = useState(new Date());
  //   const onChange = () => {
  //     setDate(date);

  //   }
  // }
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/booking/create";
      const { data: res } = await axios.post(url, data);
      console.log(res);
      localStorage.setItem("bookings", JSON.stringify(res));
      navigate("/bookings/payment");
    } catch (error) {
      setErrorMsg("error");
    }
  };

  const handleReset = () => {
    window.location.reload();
  };

  return (
    <div className={styles.booking}>
      {/* <img src={H5} className="book-image" alt="Image"/> */}
      <div className="d-flex flex-column justify-content-center container pt-5">
        <h3 style={{ textAlign: "center" }}>Book Now!</h3>
        <Form
          className="align-self-center"
          style={{
            border: "2px solid grey",
            padding: "50px",
            marginTop: "30px",
            width: "550px",
          }}
          onSubmit={handleSubmit}
        >
          <FormGroup>
            <Label for="name">Full Name</Label>
            <Input
              type="name"
              name="name"
              id="name"
              placeholder="Name"
              value={data.name}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="someone@example.com"
              value={data.email}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Address</Label>
            <Input
              type="address"
              name="address"
              id="address"
              placeholder="address"
              value={data.address}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail" maxlength="10">
              Contact
            </Label>
            <Input
              type="number"
              name="contact"
              id="contact"
              placeholder="Contact No"
              value={data.contact}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect">Session</Label>
            <Input
              type="select"
              name="session"
              value={data.session}
              id="exampleSelect"
              onChange={handleChange}
            >
              <option>---</option>
              <option>PhotoGraphy</option>
              <option>VideoGraphy</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect">Type</Label>
            <Input
              type="select"
              name="type"
              value={data.type}
              id="exampleSelect"
              onChange={handleChange}
            >
              <option>---</option>
              <option>Basic</option>
              <option>Advance</option>
              <option>Beginner</option>
              <option>Professional</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect">Equipments</Label>
            <Input
              type="select"
              name="equipments"
              value={data.equipments}
              id="exampleSelect"
              onChange={handleChange}
            >
              <option>---</option>
              <option>Own</option>
              <option>Rental</option>
            </Input>
          </FormGroup>

          <FormGroup>
            <Label for="exampleEmail">From</Label>
            <Input
              type="date"
              name="from"
              id="exampleselect"
              placeholder="DD/MM/YYYY"
              value={data.from}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">To</Label>
            <Input
              type="date"
              name="to"
              id="exampleselect"
              placeholder="DD/MM/YYYY"
              value={data.to}
              onChange={handleChange}
            />
          </FormGroup>
          {errorMsg && <p>{errorMsg}</p>}
          <Button type="submit" className={styles.submit}>
            Submit
          </Button>
          <Button onClick={handleReset} className={styles.reset}>
            Reset
          </Button>
        </Form>
      </div>
    </div>
  );
}
