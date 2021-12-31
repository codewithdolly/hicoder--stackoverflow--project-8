import React from "react";
import brand1 from "../Images/brand1.png";
import brand2 from "../Images/brand2.jpg";
import brand3 from "../Images/brand3.jpg";
import brand4 from "../Images/brand4.jpg";
import brand5 from "../Images/brand5.jpg";
import brand6 from "../Images/brand6.jpg";


const Brand = () => {
  return (
    <>
    {/* Brads carousal started*/}
      <div className="brand" align="center">
        <p>
          Thousands of organizations around the globe use Stack Overflow for
          Teams
        </p>
        <div
          id="carouselExampleIndicators"
          class="carousel slide m-3"
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
            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={brand1} class="d-block" alt="..." width="200px" />
            </div>
            <div class="carousel-item">
              <img src={brand2} class="d-block w-10" alt="..." width="200px" />
            </div>
            <div class="carousel-item">
              <img src={brand3} class="d-block w-10" alt="..." width="200px" />
            </div>
            <div class="carousel-item">
              <img src={brand4} class="d-block w-10" alt="..." width="200px" />
            </div>
            <div class="carousel-item">
              <img src={brand5} class="d-block w-10" alt="..." width="200px" />
            </div>
            <div class="carousel-item">
              <img src={brand6} class="d-block w-10" alt="..." width="200px" />
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
      </div>
          {/* Brads carousal ends*/}
    </>
  );
};

export default Brand;
