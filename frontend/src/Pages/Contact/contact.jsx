import React, { useState } from "react"; //importing react from react
import ContactHeader from "../../images/5.jpg"; //importing images for contact pages
import "./contact.css"; //importing css for styling
import axios from "axios"; //cross connection

const Contact = () => {
  //creating a function for contact
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    desc: "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/contact/create";
      const { data: res } = await axios.post(url, data);
      console.log(res);
      window.alert("Message sent!");
      window.location.replace("/contact");
      // window.location = "/";
    } catch (error) {
      setErrorMsg("error");
      console.log(error);
    }
  };

  return (
    <>
      <div id="contact">
        {/* Contact Header */}
        <div className="contact">
          <div>
            <div className="img">
              <img src={ContactHeader} alt="" />
            </div>
            <div className="Overlay"></div>
          </div>
          <div className="ContactContent">
            {/*  */}
            <form onSubmit={handleSubmit} className="contact-form">
              <h6>Contact us Now</h6>
              <div className="form-group">
                <input
                  type="name"
                  name="name"
                  value={data.name}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={data.email}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Your Email"
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="phone"
                  name="phone"
                  value={data.phone}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Your Number"
                  required
                />
              </div>

              <div className="form-group">
                <textarea
                  rows="6"
                  className="form-control"
                  placeholder="How We Can Help You"
                  required
                  name="desc"
                  value={data.desc}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button
                className="btn btn-block text-white"
                type="submit"
                style={{ backgroundColor: "blue" }}
              >
                Submit Now
              </button>
            </form>
            {/*  */}
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
