import React from "react"; //importing react from react
// import H1 from "../../images/H1.jpg"; //importing home page image 1 from images
//import Custom from '../../images/H2.jpg'; //custumization images on home-page
import "./home.css"; //importing home css for managing division
// import videobg from "../../video/Agile.mp4"; //importing a video 
import MessengerCustomerChat from "react-messenger-customer-chat"; //creating a chat-bot

const Home = () => {
  //creating a function for home
  return (
    <>
      {/* <div id="home">
        <div className="header">
          <div className="img">
            <img src={H1} alt="" />
          </div>
          <div className="overlay"></div>
          <div className="content">
            <h6>Enjoy the View</h6>
            <button className="btn text-white">Explore</button>
          </div>
        </div>
      </div> */}
      <div className="main">
        <div className="overlay"></div>
        <video className="videoTag" autoPlay loop muted>
          <source src='https://res.cloudinary.com/dckbubo4q/video/upload/v1657388442/Agile_cj4y52.mp4' type="video/mp4" />
        </video>
        <div className="home-content">
          <h1>Welcome</h1> &nbsp; &nbsp;
          <br />
          <div>
            {" "}
            <br />
            <p>To site.com</p>
          </div>
        </div>
      </div>
      <MessengerCustomerChat
        pageId="102225249219508"
        appId="502256631698863"
      />
    </>
  );
};

export default Home;
