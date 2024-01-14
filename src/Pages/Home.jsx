import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";

import Img1 from "../assets/su.png";
import Img2 from "../assets/Me.png";
import Img3 from "../assets/V.png";
import Img4 from "../assets/E.png";
import Img5 from "../assets/Ma.png";
import Img6 from "../assets/Ju.png";
import Img7 from "../assets/Sa.png";
import Img8 from "../assets/U.png";
import Img9 from "../assets/N.png";
import StarRating from "../Components/StarRating";

const products = [
  {
    id: 1,
    name: "The Sun",
    image: Img1,
  },
  {
    id: 2,
    name: "Mercury",
    image: Img2,
  },
  {
    id: 3,
    name: "Venus",
    image: Img3,
  },
  {
    id: 4,
    name: "Earth",
    image: Img4,
  },
  {
    id: 5,
    name: "Mars",
    image: Img5,
  },
  {
    id: 6,
    name: "Jupiter",
    image: Img6,
  },
  {
    id: 7,
    name: "Saturn",
    image: Img7,
  },
  {
    id: 8,
    name: "Uranus",
    image: Img8,
  },

  {
    id: 9,
    name: "Neptune",
    image: Img9,
  },
];
const ProductCard = ({ product }) => {
  return (
    <div className="product-card d-flex flex-wrap flex-column align-items-center justify-content-center pb-5">
      <img
        className="center-cropped mb-3"
        src={product.image}
        alt={product.name + " Image"}
      />
      <h3 className="text-center">{product.name}</h3>
      <a className="text-center" href={"/" + product.name}>
        Read more
      </a>
    </div>
  );
};

const Home = () => {
  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <div className="slick-arrow slick-prev">Previous</div>,
    nextArrow: <div className="slick-arrow slick-next">Next</div>,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="Landing" id="Landing">
        <div className="container h-100 d-flex flex-column align-items-center justify-content-center">
          <div className="text-center" id="black-whole">
            <h1 style={{ color: "white" }}>Space Groove Says Hello</h1>
            <h4 style={{ color: "white" }}>Introducing our Solar System</h4>
          </div>
        </div>
      </section>
      <section className="Product" id="Product">
        <div className="swappable-product-cards container h-100 ">
          <div className="d-flex flex-column h-100 align-content-center justify-content-center">
            <h2
              className="team-title fw-bold text-center my-4"
              style={{ color: "white" }}
            >
              Our Solar System
            </h2>
            <div>
              <Slider {...carouselSettings}>
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
      <section className="Contact" id="Contact">
        <div className="container h-100 d-flex flex-column align-items-center justify-content-center">
          <div className="contact-container">
            <div class="text">Contact us Form</div>
            <form action="">
              <div class="form-row">
                <div class="input-data">
                  <input type="text" required />
                  <div class="underline"></div>
                  <label for="">First Name</label>
                </div>
                <div class="input-data">
                  <input type="text" required />
                  <div class="underline"></div>
                  <label for="">Last Name</label>
                </div>
              </div>
              <div class="form-row">
                <div class="input-data">
                  <input type="text" required />
                  <div class="underline"></div>
                  <label for="">Email Address</label>
                </div>
              </div>
              <div class="form-row">
                <div class="input-data textarea">
                  <textarea rows="8" cols="80" required></textarea>
                  <br />
                  <div class="underline"></div>
                  <label for="">Write your message</label>
                  <br />
                </div>
                <StarRating
                  onRating={(rating) => console.log("Rated with: ", rating)}
                />
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
