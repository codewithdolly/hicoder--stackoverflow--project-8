import React from "react";
import "./Jobs.scss";
import { Link } from "react-router-dom";
import LeftSidebar from "../Questions/LeftSidebar";
import "./Jobs.scss";
import JobRoles from "./JobRoles";

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
                <Link
                  to="/"
                  to="/"
                  class="nav-link text-secondary active job-miniNav miniNav1"
                >
                  Jobs
                </Link>
              </li>
              <li class="nav-item ">
                <Link to="/" to="/" class="nav-link text-secondary job-miniNav">
                  Companies
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/" to="/" class="nav-link text-secondary job-miniNav">
                  Why Jobs?
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/" to="/" class="nav-link text-secondary job-miniNav">
                  Applications
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/" to="/" class="nav-link text-secondary job-miniNav">
                  Developer Story
                </Link>
              </li>
            </ul>
            {/* mini navbar ends */}

            {/* Searchbar Starts */}
            <div className="d-flex mt-4">
              <div class="input-group mr-3">
                {/* <i class="fas fa-search text-muted icon"></i> */}
                <input
                  type="text"
                  class="form-control input"
                  placeholder="Search All Jobs"
                />
                <input
                  type="text"
                  class="form-control"
                  aria-label="Text input with dropdown button"
                  placeholder="Location"
                />
                <div class="input-group-append">
                  <button
                    class="btn btn-outline-secondary dropdown-toggle"
                    type="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Within 10km
                  </button>
                  <div class="dropdown-menu">
                    <Link to="/" class="dropdown-item">
                      Within 20km
                    </Link>
                    <Link to="/" class="dropdown-item">
                      Within 30km
                    </Link>
                    <Link to="/" class="dropdown-item">
                      Within 40km
                    </Link>
                    <div role="separator" class="dropdown-divider"></div>
                    <Link to="/" class="dropdown-item">
                      Within 50km
                    </Link>
                  </div>
                </div>
              </div>
              <Link to="/">
                <button className="btn btn-primary mr-2">Search</button>
              </Link>
            </div>
            {/* Searchbar ends */}

            {/* Other options button starts*/}
            <div className="my-1">
              {buttons.map((btns) => {
                return (
                  <button className="btn btn-outline-secondary btn-sm mx-1">
                    {btns.icon}
                    {btns.text}
                  </button>
                );
              })}
              <button className="btn btn-sm text-primary ml-3">
                {" "}
                <i class="fas fa-bell mr-1"></i> Create alert
              </button>
            </div>
            {/* Other options button ends*/}

            {/* Job Short list */}
            <div className="d-flex justify-content-between align-items-center border-bottom">
              <p>490 jobs | Developer jobs</p>
              <div className="d-flex align-items-center">
                <p>Short By: </p>
                <div class="dropdown">
                  <button
                    class="btn btn-outline-secondary btn-sm dropdown-toggle ml-1 mb-3"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Matches
                  </button>
                  <div
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <Link to="/" class="dropdown-item">
                      Newest
                    </Link>
                    <Link to="/" class="dropdown-item">
                      Salary
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <JobRoles />
          </div>
        </div>
      </div>
    </>
  );
};

export default Jobs;

//buttons and their Icons
const buttons = [
  {
    icon: (
      <input
        type="checkbox"
        aria-label="Checkbox for following text input"
        className="mr-1"
      />
    ),
    text: "Remote",
  },
  {
    icon: <i class="fas fa-code mr-1"></i>,
    text: "Tech",
  },
  {
    icon: <i class="fas fa-umbrella-beach  mr-1"></i>,
    text: "Compensation",
  },
  {
    icon: <i class="fas fa-file-alt  mr-1"></i>,
    text: "Perks",
  },
  {
    icon: <i class="fas fa-file-invoice mr-1"></i>,
    text: "Background",
  },
  {
    icon: <i class="fas fa-ellipsis-h mr-1"></i>,
    text: "More",
  },
];
