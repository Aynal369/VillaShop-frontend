import React from "react";
import banner1 from "../../../../images/portfolio-1.jpg";
import banner2 from "../../../../images/portfolio-4.jpg";
import banner3 from "../../../../images/portfolio-9.jpg";

const Hero = () => {
  return (
    <section>
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img
              src={banner1}
              className="d-block w-100"
              height={480}
              alt="..."
            />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src={banner2}
              className="d-block w-100"
              height={480}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={banner3}
              className="d-block w-100"
              height={480}
              alt="..."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
