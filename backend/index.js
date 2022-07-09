require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors"); //cross connection
const connection = require("./db");
const path = require("path");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Importing Routes
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const bookingRoutes = require("./routes/booking");
const contactRoutes = require("./routes/contactRoute");
const reservationRoutes = require("./routes/reservationRoutes");
const bookRoutes = require("./routes/bookRoutes");
const jobRoutes = require("./routes/jobRoute");
const blogRoutes = require("./routes/blogRoutes");

//Connecting to Database
connection();

// Routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/booking", bookingRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/reservation", reservationRoutes);
app.use("/api/book", bookRoutes);
app.use("/api/job", jobRoutes);
app.use("/api/blogs", blogRoutes);

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));
