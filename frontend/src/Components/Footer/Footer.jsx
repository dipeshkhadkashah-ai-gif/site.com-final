import React from "react"; //importing react from react
import "./footer.css";

export default function footer() {
  return (
    <>
      <footer>
        <div className="footer-container g-0">
          <div className="row g-0">
            <div className="col-10 col-lg-10 mx-auto g-0">
              <div className="row g-0">
                <div className="col-6 col-lg-3 g-0">
                  <h3>Social Sites</h3>
                  <ul>
                    <li>
                      <a 
                        href="https://blog.hubspot.com/blog/tabid/6307/bid/5977/36-awesome-social-media-blogs-everyone-should-read.aspx"
                        target="_hubspot" className="footer-ul"
                      >
                        HubSpot
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://socialmediaexplorer.com/"
                        target="_socialmediaexplorer" className="footer-ul"
                      >
                        Social Media Explorer
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.davidmeermanscott.com/blog"
                        target="_webinknow" className="footer-ul"
                      >
                        Web Ink Now
                      </a>
                    </li>
                    <li>
                      <a href="https://www.dreamgrow.com/" target="_dreamgrow" className="footer-ul">
                        Dream Grow
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-6 col-lg-3">
                  <h3>News</h3>
                  <ul>
                    <li>
                      <a
                        href="https://www.wix.com/blog/photography/photography-portfolios?utm_source=google&utm_medium=cpc&utm_campaign=16242175905^134377093918&experiment_id=^^582523585386^^_DSA&gclid=CjwKCAjw46CVBhB1EiwAgy6M4geflG3GGmFVY3iY1jvcInnFqNSMZEqu7-9krFn98-7Zo3IUQo9s9xoC0EkQAvD_BwE"
                        target="_wix" className="footer-ul"
                      >
                        Wix
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://bettershotz.com/?gclid=CjwKCAjw46CVBhB1EiwAgy6M4m7VHzxxanJ2hzcCdgRXKvBvTRITmgufluWW-ShrL3FvPZl7sV1iaRoC2TcQAvD_BwE"
                        target="_bettershotz" className="footer-ul"
                      >
                        Bettershotz
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.shutterstock.com/explore/asia-stock-assets?kw=photograph%20website&c3apidt=p70560305965&gclid=CjwKCAjw46CVBhB1EiwAgy6M4u3BgrPPUxjJrBcRLr5ds3ORMsNnt7iNPJrxxfNrti-HQhhYfCVW5hoCZhAQAvD_BwE&gclsrc=aw.ds"
                        target="_shutterstock" className="footer-ul"
                      >
                        Shutterstock
                      </a>
                    </li>
                    <li>
                      <a href="https://www.pexels.com/" target="_pexels" className="footer-ul">
                        Pexels
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-6 col-lg-3">
                  <h3>Magazines</h3>
                  <ul>
                    <li>
                      <a
                        href="https://aperture.org/magazine/"
                        target="_aperture" className="footer-ul"
                      >
                        Aperture
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.behindtheshutter.com/"
                        target="_behindtheshutter" className="footer-ul"
                      >
                        Behind The Shutter
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.myclickmagazine.com/"
                        target="_myclickmagazine" className="footer-ul"
                      >
                        Click
                      </a>
                    </li>
                    <li>
                      <a href="https://www.photolife.com/" target="_photolife" className="footer-ul">
                        Photolife
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-6 col-lg-3">
                  <h3>Follow Us</h3>
                  <div className="row">
                    <div className="col-3 ">
                      <a href="https://www.facebook.com/nepaltourismboard" target="_nepaltourismboard" className="footer-ul">
                        <i className="fab fa-facebook fontawesome-style"></i>
                      </a>
                    </div>
                    <div className="col-3 ">
                      <a
                        href="https://www.instagram.com/exit_magazine/?hl=en"
                        target="exit_magazine" className="footer-ul"
                      >
                        <i className="fab fa-instagram fontawesome-style"></i>
                      </a>
                    </div>
                    <div className="col-3 ">
                      <a href="https://youtu.be/4OiXfDdbtnM" target="_nepal4K" className="footer-ul">
                        <i className="fab fa-youtube fontawesome-style"></i>
                      </a>
                    </div>
                    <div className="col-3 ">
                      <a href="https://twitter.com/nepaltourismb" target="_nepaltourismb" className="footer-ul">
                        <i className="fab fa-twitter fontawesome-style"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="mt-5">
                <p className="main-hero-para text-center w-100">
                  Copyright @ 2022 Agile_REDS. All rights reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
