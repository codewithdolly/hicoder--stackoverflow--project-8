import React from "react";
import { Link } from "react-router-dom";
import Qimg from "../Images/question.png";

const Questions = () => {
  return (
    <>
      <div className="container questions">
        <div className="row  m-0 p-0">
          <div className="questions--LeftSidebar col-md-2">
            {sideTabs.map((tab) => {
              return (
                <button
                  className=" btn text-muted list-group-item list-group-item-action m-1"
                  href="#list-item-1"
                >
                  {tab}
                </button>
              );
            })}

            <div className="card text-left m-0 p-0">
              <div className="card-body">
                <p>
                  <b>Stack Overflow for Teams -</b>Collaborate and share
                  knowledge with a private group.
                </p>
                <img src={Qimg} alt="IMG" />
                <button className="btn btn-primary btn-sm">
                  Create a free Team
                </button>
                <Link to="/">What is Teams?</Link>
              </div>
            </div>
          </div>
          <div className="questions--body  col-md-7">
            <div className="d-flex">
              <h2>Questions tagged [javascript]</h2>
              <button className="btn btn-primary btn-small">
                Ask Question
              </button>
            </div>
          </div>
          <div className="questions-rightSidebar  col-md-3">
            <div className="card">
              <div className="card-header" style={{backgroundColor:"rgb(241, 229, 188)"}}>  <b>The Overflow Blog</b></div>
              <div className="card-body" style={{backgroundColor:"rgb(251, 243, 213)"}}>
                <p><i class="fas fa-pen"></i> Best practices for writing code comments</p>
                <p>
                <i class="fas fa-pen"></i> Sequencing your DNA with a USB dongle and open source code
                </p>
              </div>
              <div className="card-header"  style={{backgroundColor:"rgb(241, 229, 188)"}}> <b>Featured on Meta</b></div>
              <div className="card-body" style={{backgroundColor:"rgb(251, 243, 213)"}}>
                <p><i class="far fa-comment-alt"></i> Providing a JavaScript API for userscripts</p>
                <p><i class="far fa-comment-alt"></i> Congratulations to the 59 sites that just left Beta</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Questions;

const sideTabs = [
  "Home",
  "Public",
  "Questions",
  "Tags",
  "Users",
  "Collectives",
  "Explore collective Collective",
  "Find a JOB",
  "Jobs",
  "Companies",
  "TEAMS",
];
