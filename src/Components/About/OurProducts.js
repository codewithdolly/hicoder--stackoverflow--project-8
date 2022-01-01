import React from "react";
import "./OurProducts.scss";
import logo from "../Images/logo2.png";

const OurProducts = () => {
  return (
    <>
      {/* Product page started */}
      <div className="ourProducts">
        <hr />
        <h3 className="text-center mt-2 mb-5">Our Products</h3>

        {/* public plateform card started */}
        <div className="container card text-center p-5 my-5 public--card">
          <img src={logo} alt="logo" width="100px" style={{ margin: "auto" }} />
          <h5>
            <b>Our Public Platform</b>
          </h5>
          <p style={{ fontSize: "20px" }}>
            Where developers and technologists go to gain and share knowledge.
          </p>
          <div>
            {" "}
            <button className="btn btn-primary">Participate</button>
          </div>
        </div>
        <div
          className="d-flex justify-content-between"
          style={{ width: "75%", margin: "auto" }}
        >
          {cards.map((card) => {
            return (
              <div className="d-flex justify-content-between border public--card2">
                <div>
                  <div className="d-flex mt-4">
                    <img src={logo} alt="logo" width="50px" />
                    <h5 className="mt-3">
                      <b>{card.header}</b>
                    </h5>
                  </div>
                  <p>{card.content}</p>
                  <button className="btn btn-primary">Learn more</button>
                </div>
                <div>
                  <img
                    src={process.env.PUBLIC_URL + card.img}
                    alt="team"
                    width="170px"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* public plateform card started */}
      </div>
      {/* Product page ends */}
    </>
  );
};

export default OurProducts;

const cards = [
  {
    header: "Our Team",
    content: ` Where developers and technologists share private knowledge with
        coworkers.`,
    img: "../Images/team2.png",
  },
  {
    header: "Talent",
    content: `Where companies build their employer brand to attract top
    tech talent.`,
    img: "../Images/talent.png",
  },
];
