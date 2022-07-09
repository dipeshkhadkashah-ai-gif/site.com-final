import React from "react"; //importing react form react
import { Form, FormGroup, Label, Input } from "reactstrap"; //importing functions form reactstrap
import styles from "./styles.module.css"; //importing styles from style.css
// import Calendar from "react-calendar"; //importing a calendar from react-calendar
import { Grid, Box, Button } from "@mui/material";

export default function Payment() {
  return (
    <div className="container pt-3">
      <h3 style={{ textAlign: "center" }}>Payment and Checks</h3>
      <Grid
        container
        sx={{ padding: "10px" }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={2} sm={2} md={2}>
        </Grid>
        <Grid item xs={2} sm={4} md={4} sx={{ marginRight: "80px" }}>
          <Form
            style={{
              border: "2px solid grey",
              padding: "50px",
              marginTop: "30px",
              width: "550px",
            }}
          >
            <FormGroup>
              <Label for="name">Full Name</Label>
              <Input type="name" name="password" id="name" placeholder="Name" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Contact</Label>
              <Input
                type="number"
                name="contact"
                id="contact"
                placeholder="Contact.No"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Address</Label>
              <Input
                type="address"
                name="address"
                id="address"
                placeholder="Area,Province"
              />
            </FormGroup>
            <h2>Booking Dates</h2>
            <FormGroup>
              <Label for="exampleEmail">From</Label>
              <Input
                type="date"
                name="from"
                id="exampleselect"
                placeholder="DD/MM/YYYY"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">To</Label>
              <Input
                type="date"
                name="to"
                id="exampleselect"
                placeholder="DD/MM/YYYY"
              />
            </FormGroup>
            <h2>Total: $********</h2>

            <Button className={styles.submit}>Pay</Button>
          </Form>
        </Grid>
        <Grid item xs={2} sm={4} md={4} sx={{ marginLeft: "60px" }}>
          <Grid>
            <Button 
              sx={{
                width: "200px",
                padding: "20px",
                fontSize: "20px",
                margin: "90px 0px 50px 60px",
              }}
              size="large"
              variant="contained"
            >
              Paypal
            </Button>
          </Grid>
          <Grid>
            <Button
              sx={{ width: "200px", padding: "20px", fontSize: "20px",
              margin: "50px 0px 50px 60px", }}
              size="large"
              variant="contained"
            >
              Credit Card
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

