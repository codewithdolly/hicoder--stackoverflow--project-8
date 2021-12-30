import React from "react";
import "./AboutTeam.scss";
import img3 from "../Images/img3.png";
import coma from "../Images/coma2.png";
import microsoft from "../Images/microsoft3.png";

const AboutTeam = () => {
  return (
    <>
      <div className="container-fluid aboutTeam">
        <div className="row">
          <div className="col-md-7 mx-4">
            <img src={img3} alt="" width="800px" height="700px" />
          </div>
          <div className="col-md-4 mt-5">
            <div className="card">
              <img src={coma} alt="" width="100px" />
              <div className="card-body">
                When these questions are on Stack Overflow for Teams, I get to
                be more productive because I don't have to answer the same
                question twice.
              </div>
            </div>
            <div className="d-flex my-3 justify-content-between">
              <div>
                <h5 style={{ color: "rgb(242, 116, 13)" }}>Suraj Gupta</h5>
                <p>
                  Program Manager, <br />
                  Microsoft Cloud Test Team
                </p>
              </div>
              <div>
                <img src={microsoft} alt="" width="150px" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutTeam;
