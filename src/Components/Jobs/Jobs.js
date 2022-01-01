import React from "react";
import "./Jobs.scss"
import { Link } from "react-router-dom";
import LeftSidebar from "../Questions/LeftSidebar";
import "./Jobs.scss";

const Jobs = () => {
  return (
    <>
      <div className="container-fluid questions">
        <div className="row" style={{ margin: "0 8%" }}>
          {/* Left Sidebar added */}
          <div
            className="questions--LeftSidebar col-md-2 border"
            style={{ fontSize: "14px", overflowY: "scroll" }}
          >
            <LeftSidebar />
          </div>
          <div
            className="questions--body col-md-10 px-4"
            style={{ fontSize: "12px" }}
          >
            <p className="my-5" style={{ fontSize: "20px" }}>
              <b>Developers first.</b> You’ll never receive recruiter spam{" "}
              <br /> or see fake job listings on our site.
            </p>

            {/* mini navbar started */}
            <ul class="nav">
              <li class="nav-item">
                <Link to="/" class="nav-link text-secondary active job-miniNav miniNav1" >
                  Jobs
                </Link>
              </li>
              <li class="nav-item ">
                <Link to="/" class="nav-link text-secondary job-miniNav" >
                  Companies
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/" class="nav-link text-secondary job-miniNav" >
                  Why Jobs?
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/" class="nav-link text-secondary job-miniNav">
                  Applications
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/" class="nav-link text-secondary job-miniNav" >
                  Developer Story
                </Link>
              </li>
            </ul>
            {/* mini navbar ends */}
            <hr />
          </div>

          {/* Right Sidebar added */}
          {/* <div
            className="questions-rightSidebar col-md-3"
            style={{ fontSize: "12px", lineHeight: "10px" }}
          >
            Right Side
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Jobs;
