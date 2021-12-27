import React from "react";
import "./UserQuestions.scss";
import { Link } from "react-router-dom";
import img from "../Images/user6.png";

const hashtage = [
    {
        hash1: "excel",
        hash2:"JavaScript",
        hash3:"React",
    },
    {
        hash1: "react",
        hash2:"HTML",
        hash3:"js",
    },
]

const questions = [
    {
        view: 111,
        question:` Excel search multiples rows containing substring`,
        ans:`I have an Excel file with 2 sheets : The first one got a list of
        keywords in a column. The second one got sentences on a column along
        with an id on another column. Thus the 2 sheets look like this : ...`,
        hashtag1:"excel",
        hashtag: "react",
        time:" 1 min",
        img:"../Images/user6.png",
        user:"Dolly singh",
        score:111,
        badge:"9",
    },
    {
        view:91,
        question:` Excel search multiples rows containing substring`,
        ans:`I have an Excel file with 2 sheets : The first one got a list of
        keywords in a column. The second one got sentences on a column along
        with an id on another column. Thus the 2 sheets look like this : ...`,
        hashtag:"excel",
        time:"1 min",
        img:"../Images/user3.png",
        user:"Dolly singh",
        score:111,
        badge:"9",
    },

];

const UserQuestions = () => {
  return (
    <>
    {questions.map((que)=>{
        return  <div className="userQuestions d-flex border-bottom py-2" style={{ fontSize: "12px" }}>
        <div className="left text-muted mr-3">
          <p className="">
            0<br />
            <span>votes</span>
          </p>
          <p className="">
            0<br />
            <span>answers</span>
          </p>
          <small>{que.view} views</small>
        </div>
        <div className="right">
          <Link to="/">
            <h5 className="que font-weight-normal">
              {que.question}
            </h5>
          </Link>
          <p>
           {que.ans}
          </p>
          <button
            className="btn btn-sm mr-1"
            style={{
              color: "rgb(122, 167, 199)",
              backgroundColor: "rgb(225, 236, 244)",
              fontSize: "10px",
            }}
          >
            {que.hashtag}
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
            <span className="mb-1">asked {que.time} ago</span>
            <div className="d-flex mr-3">
              <img
                src={process.env.PUBLIC_URL + que.img }
                alt="User"
                className="mr-2"
                width="40px"
                height="40px"
                style={{ borderRadius: "1rem" }}
              />
              <div>
                <Link to="/">{que.user}</Link>
                <div className="text-muted">
                  <b>{que.score} </b>
                  <span className="dot"></span> {que.badge}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    })}
     
    </>
  );
};

export default UserQuestions;
