import React from "react"; //importing react from react
// import AboutHeader from "../../images/H6.jpg"; //importing header image for about page
// import AboutCustom from "../../images/H7.jpg"; //customing about page
import "./about.css"; //importing css for styles in about page
import K1 from "../../images/K1.jpg";
import K2 from "../../images/K2.jpg";
import dipesh from '../../images/dipesh.JPG';
import sonu from '../../images/sonu.png'; 
import eun from '../../images/eun.png';
import rage from '../../images/rage.png'; 

const About = () => {
  //creating a function for about
  return (
    <>
      <div className="about">
        <div class="we-are-block">
          <div id="about-us-section">
            <div class="about-us-image">
              <img src={K2} width="808" height="458" alt="Lobby Image" />
            </div>

            <div class="about-us-info">
              <h2>We promote Culture</h2>

              <p>
                Nepalis often exhibit patience and calmness, and are generally
                not overly dramatic people. Their tolerance has enabled many
                different faiths and ethnicities to coexist quite harmoniously.
                Much of Nepal's culture is deeply steeped in tradition and
                religion.
              </p>
            </div>
          </div>

          <div id="history-section">
            <div class="history-image">
              <img src={K1} width="951" height="471" alt="Building Pic" />
            </div>

            <div class="history-info">
              <h2>Preserving Local History</h2>

              <p>
                History. The Kathmandu Valley may have been inhabited as early
                as 300 BCE, since the oldest known objects in the valley date to
                a few hundred years BCE. The earliest known inscription is dated
                185 CE. The oldest firmly dated building in the earthquake-prone
                valley is over 2,000 years old.
              </p>
            </div>
          </div>
        </div>
        <div class="container mt-lg-5">
          <div class="row justify-content-center">
            <div class="col-12 col-sm-8 col-lg-6">
              <div
                class="section_heading text-center wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <h3>
                  Our Creative <span> Team</span>
                </h3>
                <p>
                  Site is completely creative, lightweight, clean &amp; super
                  responsive blog page with a lot of features.
                </p>
                <div class="line"></div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-sm-6 col-lg-3">
              <div
                class="single_advisor_profile wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <div class="advisor_thumb">
                  <img
                    src={rage}
                    alt=""
                    className="about-image"
                  />
                  <div class="social-info">
                    <a href="#">
                      <i class="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i class="fa-brands fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i class="fa-brands fa-instagram"></i>
                    </a>
                  </div>
                </div>

                <div class="single_advisor_details_info">
                  <h6>Rejina Thapa</h6>
                  <p class="designation">Founder &amp; CEO</p>
                </div>
              </div>
            </div>

            <div class="col-12 col-sm-6 col-lg-3">
              <div
                class="single_advisor_profile wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div class="advisor_thumb">
                  <img
                    src={eun}
                    alt=""
                    className="about-image"
                  />

                  <div class="social-info">
                    <a href="#">
                      <i class="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i class="fa-brands fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i class="fa-brands fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div class="single_advisor_details_info">
                  <h6>Eunice Rana</h6>
                  <p class="designation">UI Designer</p>
                </div>
              </div>
            </div>

            <div class="col-12 col-sm-6 col-lg-3">
              <div
                class="single_advisor_profile wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <div class="advisor_thumb">
                  <img
                    src={dipesh}
                    alt=""
                    className="about-image"
                  />

                  <div class="social-info">
                    <a href="#">
                      <i class="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i class="fa-brands fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i class="fa-brands fa-instagram"></i>
                    </a>
                  </div>
                </div>

                <div class="single_advisor_details_info">
                  <h6>Dipesh Khadka Shah</h6>
                  <p class="designation">Developer</p>
                </div>
              </div>
            </div>

            <div class="col-12 col-sm-6 col-lg-3">
              <div
                class="single_advisor_profile wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div class="advisor_thumb">
                  <img
                    src={sonu}
                    alt=""
                    className="about-image"
                  />

                  <div class="social-info">
                    <a href="#">
                      <i class="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i class="fa-brands fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i class="fa-brands fa-instagram"></i>
                    </a>
                  </div>
                </div>

                <div class="single_advisor_details_info">
                  <h6>Sonu Magar</h6>
                  <p class="designation">Marketing Manager</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
