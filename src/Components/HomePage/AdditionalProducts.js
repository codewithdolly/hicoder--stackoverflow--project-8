import React from "react";
import "./AdditionalProducts.scss";
import imgleft from "../Images/img-left.png";
import imgright from "../Images/img-right.png";
import Logo from "../Images/logo1.png";
import Logo2 from "../Images/logo2.png";
import blue from "../Images/blue.png";
import yellow from "../Images/yellow.png";
import Orange from "../Images/orange.png";
import lock from "../Images/lock.png";

const AdditionalProducts = () => {
  return (
    <>
      <div className="d-flex justify-content-between additionalProducts">
        {/* Additional products left side started */}
        <div>
          <img src={imgleft} alt="imgleft" width="400px" />
          <img src={Orange} alt="" width="200px" className="orangeImg" />
          <img src={blue} alt="" className="blueImg" />
        </div>
        {/* Additional products left side ends */}

        {/* Additional products Middle part stated */}
        <div className="justify-content-center additionalProducts--centerPart">
          <center>
            {" "}
            <img
              src={Logo}
              alt=""
              width="300px"
              className="pb-4 border-bottom"
            />
          </center>
          <h3 className="mt-5 text-center">
            Additional products that reach and engage developers &
            technologists…
          </h3>

          {/* Cards started */}
          {cards.map((card) => {
            return (
              <div className=" additionalProducts--centerPart--card border m-3">
                {" "}
                <div className="text-center">
                  <div className="d-flex justify-content-center ">
                    <img src={Logo2} alt="" width="50px" />
                    <p className="border-left pl-2 mt-3">
                      <b>{card.name}</b>
                    </p>
                  </div>
                  <p className="text-center">{card.content}</p>
                </div>
              </div>
            );
          })}
          {/* Cards Ends */}
        </div>
        {/* Additional products Middle part Ends */}

        {/* Additional products Right side ends */}
        <div>
          <img src={imgright} alt="" width="400px" />
          <img src={yellow} alt="" width="" className="yellowImg" />
        </div>
      </div>
      {/* Additional products Right side ends */}

      {/* private community creation */}
      <hr />
      <div className="d-flex justify-content-center align-self-center mb-4">
        <div>
          <img src={lock} alt="" />
        </div>
        <p className="mr-3 pt-4">
          Build a <b> private community</b> to share technical or non-technical
          knowledge.
        </p>
        <button
          className="btn btn-outline"
          style={{
            color: "rgb(55, 159, 239)",
            border: "1px solid rgb(55, 159, 239)",
          }}
        >
          <b>Create a free team</b>
        </button>
      </div>
      {/* private community creation */}
      <hr />
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
