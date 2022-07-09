import React from "react"; //importing react from react
import "./App.css"; //importing app.css for stylesheets
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  BrowserRouter,
} from "react-router-dom"; //import router-dom for routers,routes and route
import { Navbar } from "./Components"; //importing navbar
import { Home, About, Gallery, Contact } from "./Pages"; //importing home from pages
import Login from "./Components/Login/Login";
import SignUp from "./Components/Signup/SignUp";
import Booking from "./Pages/Booking/booking";
import Reservation from "./Components/Admin/Reservation";
import Reservations from "./Pages/Reservations/Reservations";
import Dashboard from "./Components/Admin/Dashboard";
import Payment from "./Pages/Payment/payment";
import Profile from "./Pages/Profile/Profile";
import Footer from "./Components/Footer/Footer";
import CreateBooking from './Components/Admin/create/CreateBooking'
import CreateReservation from './Components/Admin/create/CreateReservation'
import Bookings from "./Components/Admin/Bookings";
import SingleReservation from "./Pages/Reservations/SingleReservation";
import BookPhotographer from './Pages/Reservations/BookPhotographer.js'
import DiplayPhotographer from './Components/Admin/DisplayPhotographer.js'
import DispayContact from './Components/Admin/DisplayContact.js'
import Job from "./Pages/Job/Job";
import Management from "./Pages/Job/Management";
import CreateBlogs from "./Components/Admin/create/CreateBlog";
import Blogs from "./Components/Admin/Blogs";
import GetBlogs from './Pages/Blogs'
import BlogScreen from "./Pages/BlogScreen";
import PaymentScreen from "./Pages/PaymentScreen.jsx";// import { HashLink as Link } from "react-router-hash-link";
// import ReactYouTubeExample from './Pages/Home/home';  //using a background youtube video player

const App = () => {
  //creating a function for App
  const user = localStorage.getItem("token");

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {/* <ReactYouTubeExample videoId='4OiXfDdbtnM' /> */}
           <Route path="/" exact element={<Home />}/>
          <Route path="/about" element={<About />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/reservation" element={<Reservations />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/profile" element={<Profile />} />
          {/* Admin */}
          <Route path="/admin/booking" element={<Bookings/>}/>
          <Route path="/admin/reservations" element={<Reservation/>}/>
          <Route path="/reservation/:id" element={<SingleReservation/>}/>
          <Route path="/create/reservation" element={<CreateReservation />} />
          <Route path="/admin/book" element={<DiplayPhotographer />} />
          <Route path="/admin/displaycontact" element={<DispayContact />} />
          <Route path="/create/booking" element={<CreateBooking />} />
          <Route path="/bookphotographer" element={<BookPhotographer />} />
          <Route path="/job" element={<Job />} />
          <Route path="/admin/blogs" element={<Blogs />} />
          <Route path="/management" element={<Management />} />
          <Route path="/admin/blogs/create" element={<CreateBlogs/>}></Route>
          <Route path="/blogs" element={<GetBlogs/>}></Route>
          <Route path="/blogs/:id" element={<BlogScreen/>}></Route>
          <Route path="/bookings/payment" element={<PaymentScreen/>}></Route>



        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;
