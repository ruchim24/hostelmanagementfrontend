import React from "react";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import image1 from "../images/jumbotron-1.jpg";
import image2 from "../images/jumbotron-2.jpg";
import image3 from "../images/jumbotron-3.jpg";
function Home() {
  return (
    <>
      <Navbar />

      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src={image1} alt="First slide" />
            <div class="carousel-caption d-none d-md-block">
              <h1 className="carousel-header-class">MPUAT</h1>
              <h4>CTAE, Udaipur</h4>
            </div>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={image2} alt="Second slide" />
            <div class="carousel-caption d-none d-md-block">
              <h1 className="carousel-header-class">MPUAT</h1>
              <h4>CTAE, Udaipur</h4>
            </div>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={image3} alt="Third slide" />
            <div class="carousel-caption d-none d-md-block">
              <h1 className="carousel-header-class">MPUAT</h1>
              <h4>CTAE, Udaipur</h4>
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      <Footer />
    </>
  );
}

export default Home;
