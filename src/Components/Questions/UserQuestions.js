import React from "react";
import "./UserQuestions.scss";
import { Link } from "react-router-dom";
import img from "../Images/user6.png";

const reviews = [112, 45, 65, 231, 251, 432, 63, 111,64, 53, 32, 421, 124, 321, 54];

const question = [];

const UserQuestions = () => {
  return (
    <>
      <div className="userQuestions d-flex" style={{ fontSize: "12px" }}>
        <div className="left text-muted mr-3">
          <p className="">
            0<br />
            <span>votes</span>
          </p>
          <p className="">
            0<br />
            <span>Answeres</span>
          </p>
          <small>10 views</small>
        </div>
        <div className="right">
          <Link to="/">
            <h5 className="que font-weight-normal">
              Excel search multiples rows containing substring
            </h5>
          </Link>
          <p>
            I have an Excel file with 2 sheets : The first one got a list of
            keywords in a column. The second one got sentences on a column along
            with an id on another column. Thus the 2 sheets look like this : ...
          </p>
          <button
            className="btn btn-sm mr-1"
            style={{
              color: "rgb(122, 167, 199)",
              backgroundColor: "rgb(225, 236, 244)",
              fontSize: "10px",
            }}
          >
            excel
          </button>
          <button
            className="btn btn-sm mr-1"
            style={{
              color: "rgb(122, 167, 199)",
              backgroundColor: "rgb(225, 236, 244)",
              fontSize: "10px",
            }}
          >
            search
          </button>
          <button
            className="btn btn-sm mr-1"
            style={{
              color: "rgb(122, 167, 199)",
              backgroundColor: "rgb(225, 236, 244)",
              fontSize: "10px",
            }}
          >
            excel-formula
          </button>
          <div className="profile float-right mt-4">
            <span className="mb-1">asked 1 min ago</span>
            <div className="d-flex mr-3">
              <img
                src={img}
                alt="User"
                className="mr-2"
                width="40px"
                height="40px"
                style={{ borderRadius: "1rem" }}
              />
              <div>
                <Link to="/">Dolly singh</Link>
                <div className="text-muted">
                  <b>111 </b>
                  <span className="dot"></span> 9
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default UserQuestions;
