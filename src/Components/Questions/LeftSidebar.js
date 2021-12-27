import React from 'react'
import { Link } from "react-router-dom";
import Qimg from "../Images/question.png";

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
  

const LeftSidebar = () => {
    return (
        <>
            <div
            className="questions--LeftSidebar col-md-2 border"
            style={{ fontSize: "14px", overflowY: "scroll" }}
          >
            {sideTabs.map((tab) => {
              return (
                <button
                  className=" btn text-muted list-group-item list-group-item-action my-1"
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
                <button className="btn btn-primary btn-sm my-2">
                 <small> Create a free Team</small>
                </button>
                <Link className='text-muted text-center' to="/"><small>What is Teams?</small></Link>
              </div>
            </div>
          </div>
        </>
    )
}

export default LeftSidebar
