import React from "react";
import { Link } from "react-router-dom";
import img from "../Images/user6.png"

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
          <button className="btn btn-sm mr-1" style={{
                  color: "rgb(122, 167, 199)",
                  backgroundColor: "rgb(225, 236, 244)", fontSize:"10px"
                }}>excel</button>
          <button className="btn btn-sm mr-1" style={{
                  color: "rgb(122, 167, 199)",
                  backgroundColor: "rgb(225, 236, 244)", fontSize:"10px"
                }}>search</button>
          <button className="btn btn-sm mr-1" style={{
                  color: "rgb(122, 167, 199)",
                  backgroundColor: "rgb(225, 236, 244)", fontSize:"10px"
                }}>excel-formula</button>
                <div className="profile justify-content-end">
                    <p>asked 1 min ago</p>
                    <div>
                    <img src={img} alt="User" className="rounded" width="40px" />
                    <Link to="/">Dolly</Link>
                    <p><b>111</b>9</p>
                    </div>

                </div>
        </div>
      </div>
    </>
  );
};

export default UserQuestions;
