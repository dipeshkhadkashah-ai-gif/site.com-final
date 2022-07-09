import React, { useState } from "react";
import {
  Grid,
  Card,
  CardActionArea,
  Box,
  CardMedia,
  Typography,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import styles from "./styles.module.css";
import "../../Components/Admin/Dashboard.css";

import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Reservations = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getReservations = async () => {
      const { data: response } = await axios.get(
        "http://localhost:8080/api/reservation"
      );
      setData(response);
      console.log(response);
    };
    getReservations();
  }, []);

  return (
    <>
      <div style={{ margin: "50px", height: "100vh" }}>
        <h3 style={{ textAlign: "center" }}>Reservation</h3>
        <Grid container spacing={2}>
          {data.map((person) => (
            <Grid item xs={4}>
              <Link to={`/reservation/${person._id}`}>
                <Card sx={{ maxWidth: 500 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={`/uploads/${person.image}`}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {person.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {person.role}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {person.proffession}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default Reservations;
