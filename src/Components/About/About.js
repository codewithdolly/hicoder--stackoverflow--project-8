import React from "react";
import "./About.scss";
import { Link } from "react-router-dom";
import EmpoweringWorld from "./EmpoweringWorld";

const About = () => {
  return (
    <>
      <div className="about">
      {/* Mini navbar startes */}
        <div className="d-flex justify-content-between mx-5 py-4">
          <div>
            <ul class="nav">
              <li class="nav-item ">
                <Link to="/" class="nav-link btn active about-miniNav miniNav1 px-3">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/" class="nav-link text-muted about-miniNav px-3"  >
                  Leadership
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/" class="nav-link text-muted about-miniNav px-3"  >
                  Careers
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/" class="nav-link text-muted about-miniNav px-3"  >
                  Open position
                </Link>
              </li>
              <li class="nav-item about-miniNav px-3">
                <Link to="/" class="nav-link text-muted"  >
                  Press
                </Link>
              </li>
              <li class="nav-item about-miniNav px-3">
                <Link to="/" class="nav-link text-muted"  >
                  Research
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/" class="nav-link text-muted about-miniNav px-3"  >
                  Contact us
                </Link>
              </li>
              
            </ul>
          </div>
          <div className="d-flex align-items-center">
            <p className="pt-1">new here?</p>
            <button className="btn btn-primary btn-sm ml-2 mb-2">
              Take a tour
            </button>
          </div>
        </div>
         {/* Mini navbar Ends */}
        
        <EmpoweringWorld />

      </div>
    </>
  );
};

export default About;
