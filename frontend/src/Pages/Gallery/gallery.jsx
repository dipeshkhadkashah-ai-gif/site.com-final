import React from "react"; //importing react from react
import GalleryHeader from "../../images/H9.jpg"; //importing images for gallery
import "./gallery.css"; //for style in gallery
import Img1 from "../../images/1.jpg";
import Img2 from "../../images/2.jpg";
import Img3 from "../../images/3.jpg";
import Img4 from "../../images/4.jpg";
import Img5 from "../../images/5.jpg";
import Img6 from "../../images/6.jpg";

const Gallery = () => {
  //creating a function
  return (
    <>
      <div className="content">
        <h2>Temple</h2>
        <div className="grid">
          <figure className="effect-lily">
            <img src={Img1} alt="img12" className="content-image" />
            <figcaption>
              <div>
                <h2>
                  <span>Pashupatinath</span>
                </h2>
                <p>
                  A sadhu is a religious ascetic, mendicant (monk), or any holy
                  person in Hinduism and Jainism who has renounced the worldly
                  life.
                </p>
              </div>
              <a href="#">View more</a>
            </figcaption>
          </figure>
          <figure className="effect-lily">
            <img src={Img2} alt="img12" className="content-image" />
            <figcaption>
              <div>
                <h2>
                  <span>Swyambhu</span>
                </h2>
                <p>
                  Teach us to trust you and to love you more and more. You are
                  good; you are great; and you are faithful, God.
                </p>
              </div>
              <a href="#">View more</a>
            </figcaption>
          </figure>
        </div>
        <h2>Prayer</h2>
        <div className="grid">
          <figure className="effect-sadie">
            <img src={Img3} alt="img12" className="content-image" />
            <figcaption>
              <h2>
                <span>Diyo</span>
              </h2>
              <p>
                For every-time prayers <br />
                Cleansing the soul
              </p>
              <a href="#">View more</a>
            </figcaption>
          </figure>
          <figure className="effect-sadie">
            <img src={Img4} alt="img12" className="content-image" />
            <figcaption>
              <h2>
                <span>Jatra</span>
              </h2>
              <p>
                Jatra for worshipping gods
                <br />
                Remebering the God
              </p>
              <a href="#">View more</a>
            </figcaption>
          </figure>
        </div>
        <h2>Festival</h2>
        <div className="grid">
          <figure className="effect-honey">
            <img src={Img5} alt="img12" className="content-image" />
            <figcaption>
              <h2>
                <span>Tika</span>
              </h2>
              <a href="#">View more</a>
            </figcaption>
          </figure>
          <figure className="effect-honey">
            <img src={Img6} alt="img12" className="content-image" />
            <figcaption>
              <h2>
                <span>Changa</span>
              </h2>
              <a href="#" className="content-image">
                View more
              </a>
            </figcaption>
          </figure>
        </div>
      </div>
    </>
  );
};

export default Gallery;
