import React from "react";
import "./AdditionalProducts.scss";
import imgleft from "../Images/img-left.png";
import imgright from "../Images/img-right.png";
import Logo from "../Images/logo1.png";
import Logo2 from "../Images/logo2.png";

const AdditionalProducts = () => {
  return (
    <>
      <div className="d-flex justify-content-between additionalProducts">
        <div>
          <img src={imgleft} alt="" width="400px" />
        </div>
        <div className="justify-content-center additionalProducts--centerPart">
          <img src={Logo} alt="" width="400px" />
          <hr />
          <h3 className="mt-5 text-center">
            Additional products that reach and engage developers &
            technologists…
          </h3>

          {cards.map((card) => {
            return (
              <div className="card d-flex additionalProducts--centerPart--card">
                {" "}
                <div className="card-body ">
                  <div className="d-flex justify-content-center ">
                    <img src={Logo2} alt="" width="50px" />
                    <p className="border-left pl-2 mt-3">
                      <b>ADVERTISING</b>
                    </p>
                  </div>
                  <p>
                    Reach the world’s largest audience of developers and
                    technologists
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          {" "}
          <img src={imgright} alt="" width="400px" />
        </div>
      </div>
    </>
  );
};

export default AdditionalProducts;

const cards = [
  {
    name: "ADVERTISING",
    content:
      "Reach the world’s largest audience of developers and technologists",
  },

  {
    name: "COLLECTIVE",
    content:
      "Connecting communities with the specific technologies they use the most",
  },
  {
    name: "TALENT",
    content: "Build your employer brand to attract tech talent",
  },
  {
    name: "JOBS",
    content: "Programming & related technical career opportunities",
  },
];
