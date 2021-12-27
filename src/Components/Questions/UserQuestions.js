import React from "react";
import { Link } from "react-router-dom";

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
          <p>I have an Excel file with 2 sheets : The first one got a list of keywords in a column. The second one got sentences on a column along with an id on another column. Thus the 2 sheets look like this : ...</p>
        </div>
      </div>
    </>
  );
};

export default UserQuestions;
