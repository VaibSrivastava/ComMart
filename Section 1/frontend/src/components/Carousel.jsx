import React from "react";

const Carousel = () => {
  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel" style={{objectFit:"contain "}} >
        <div className="carousel-inner" id="carousel">
          <div className="carousel-caption" style={{ zIndex: "10" }}>
          </div>
          <div className="carousel-item active">
            <img
              src="https://source.unsplash.com/random/300×300/?food"
              className="d-block w-100" style={{filter: "brightness(50%)"}}
              alt="..." />
          </div>
          <div className="carousel-item">
            <img
              src="https://source.unsplash.com/random/300×300/?bakery"
              className="d-block w-100" style={{filter: "brightness(30%)"}}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://source.unsplash.com/random/300×300/?food"
              className="d-block w-100" style={{filter: "brightness(30%)"}}
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
