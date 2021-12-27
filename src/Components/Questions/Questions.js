import React from "react";
import { Link } from "react-router-dom";
import Qimg from "../Images/question.png";

const Questions = () => {
  return (
    <>
      <div className="container-fluid questions">
        <div className="row" style={{ margin: "0 8%" }}>
          <div
            className="questions--LeftSidebar col-md-2 border"
            style={{ fontSize: "14px", overflowY: "scroll" }}
          >
            {sideTabs.map((tab) => {
              return (
                <button
                  className=" btn text-muted list-group-item border list-group-item-action my-1"
                  href="#list-item-1"
                  style={{ fontSize: "14px" }}
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
                <img src={Qimg} alt="IMG" width="120px" />
                <button className="btn btn-primary btn-sm">
                  Create a free Team
                </button>
                <Link to="/">What is Teams?</Link>
              </div>
            </div>
          </div>
          <div
            className="questions--body col-md-7"
            style={{ fontSize: "12px" }}
          >
            <div className="d-flex justify-content-between my-3">
              <h2 className="font-weight-normal">
                Questions tagged [javascript]
              </h2>
              <button
                className="btn btn-primary btn-small"
                style={{ fontSize: "14px" }}
              >
                Ask Question
              </button>
            </div>
            <p>
              For questions regarding programming in ECMAScript (JavaScript/JS)
              and its various dialects/implementations (excluding ActionScript).
              Note JavaScript is NOT the same as Java! Please include all
              relevant tags on your question; e.g., [node.js], [jquery], [json],
              [reactjs], [angular], [ember.js], [vue.js], [typescript],
              [svelte], etc.
            </p>
            <Link className="mr-2" to="/">
              Learn more…
            </Link>
            <Link className="mr-2" to="/">
              Top users
            </Link>
            <Link className="mr-2" to="/">
              Synonyms (14)
            </Link>{" "}
            <Link className="mr-2" to="/">
              javascript jobs
            </Link>
          </div>
          <div
            className="questions-rightSidebar col-md-3"
            style={{ fontSize: "12px", lineHeight: "10px" }}
          >
            <div className="card">
              <div
                className="card-header"
                style={{ backgroundColor: "rgb(241, 229, 188)" }}
              >
                {" "}
                <b>The Overflow Blog</b>
              </div>
              <div
                className="card-body"
                style={{ backgroundColor: "rgb(251, 243, 213)" }}
              >
                <p>
                  <i class="fas fa-pen"></i> Best practices for writing code
                  comments
                </p>
                <p>
                  <i class="fas fa-pen"></i> Sequencing your DNA with a USB
                  dongle and open source code
                </p>
              </div>
              <div
                className="card-header"
                style={{ backgroundColor: "rgb(241, 229, 188)" }}
              >
                {" "}
                <b>Featured on Meta</b>
              </div>
              <div
                className="card-body"
                style={{ backgroundColor: "rgb(251, 243, 213)" }}
              >
                <p>
                  <i class="far fa-comment-alt"></i> Providing a JavaScript API
                  for userscripts
                </p>
                <p>
                  <i class="far fa-comment-alt"></i> Congratulations to the 59
                  sites that just left Beta
                </p>
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
