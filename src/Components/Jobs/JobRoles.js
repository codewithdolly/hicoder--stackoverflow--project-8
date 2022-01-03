import React from "react";
import "./JobRoles.scss";
import { Link } from "react-router-dom";
import SingleJob from "./SingleJob";

const JobRoles = () => {
  return (
    <>
      <div className="jobRoles d-flex border">
        {/* Jobs details started --left */}
        <div className=" border-right p-2 jobRoles--jobs" style={{width:"30%"}}>
          {jobs.map((job) => {
            return (
              <>
                <div className="d-flex border-bottom my-2">
                  <div>
                    <img
                      src={process.env.PUBLIC_URL + job.img}
                      alt=""
                      width="60px"
                      className="rounded mr-2"
                    />
                  </div>
                  <div>
                    <h5>
                      <Link to="/" className="font-weight-normal">
                       {job.name}
                      </Link>
                    </h5>
                    <p>
                    {job.place} •{" "}
                      <span className="text-muted"> No office location</span>
                    </p>
                    <div className="btns">
                      <button className="btn jobButtonColor">{job.WorkType1}</button>
                      <button className="btn jobButtonColor">{job.WorkType2}</button>
                      <button className="btn jobButtonColor">{job.WorkType3}</button>
                      <button className="btn jobButtonColor">{job.WorkType4}</button>
                      <button className="btn jobButtonColor">{job.WorkType5}</button>
                    </div>
                    <p>
                      {job.post} • <span className="text-muted">  {job.type}</span>
                    </p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
       {/* Jobs details ends */}

        {/* Right Side adding --right */}
        <div style={{width:"50%"}}>
        <SingleJob /></div>
      </div>
    </>
  );
};

export default JobRoles;

let jobs = [
  {
    name: "React Developer (Remote) & JavaScript Developer ",
    img: "../Images/job2.png",
    place: "X-Team",
    jobType: " No office location",
    WorkType1: "reactjs",
    WorkType2: "typescript",
    WorkType3: "webpack",
    WorkType5: "amazon-web-services",
    WorkType4: "redux",
    post: "13d ago",
    type: "Remote",
  },

  {
    name: "Experienced Frontend (GraphQL / React / Typescript) Developers",
    img: "../Images/job1.png",
    place: "Theorem, LLC",
    jobType: " No office location",
    WorkType1: "reactjs",
    WorkType2: "javascript",
    WorkType3: "figma",
    WorkType4: "typescript",
    WorkType5: "redux",
    post: "5d ago",
    type: "Remote",
  },
  {
    name: "Senior Front end React and JavaScript Developer",
    img: "../Images/job5.jpg",
    place: "Request ",
    jobType: " No office location",
    WorkType1: "user-experience",
    WorkType2: "testing",
    WorkType3: "typescript",
    WorkType4: "javascript",
    WorkType5: "reactjs",
    post: "25d ago",
    type: "Remote",
  },

  {
    name: "Python / Django and React / Typescript Developers",
    img: "../Images/job4.png",
    place: "OpenUnited",
    jobType: " No office location",
    WorkType1: "reactjs",
    WorkType2: "python",
    WorkType3: "django",
    WorkType4: "",
    WorkType5: "",
    post: "7d ago",
    type: "Remote",
  },
  {
    name: "Full-Stack JavaScript Developer (Remote)",
    img: "../Images/job2.png",
    place: "X-Team",
    jobType: " No office location",
    WorkType1: "javascript",
    WorkType2: "reactjs",
    WorkType3: "node.js",
    WorkType4: "typescript",
    WorkType5: "amazon-web-services",
    post: "2d ago",
    type: "Remote",
  },
  {
    name: "Frontend Engineer JavaScript Developer (HTML, CSS)",
    img: "../Images/job6.jpg",
    place: "Whitespectre ",
    jobType: " No office location",
    WorkType1: "ruby-on-rails",
    WorkType2: "go",
    WorkType3: "go",
    WorkType4: "",
    WorkType5: "",
    post: "3d ago",
    type: "Remote",
  },
  {
    name: "Senior/Front End Engineer JavaScript Developer, APAC",
    img: "../Images/job3.png",
    place: "Coda Payments",
    jobType: " No office location",
    WorkType1: "javascript",
    WorkType2: "vue.js",
    WorkType3: "vuejs2",
    WorkType4: "api",
    WorkType5: "node.js",
    post: "28d ago",
    type: "Remote",
  },
  {
    name: "Remote Polyglot Software Engineer – TDD, XP, JavaScript",
    img: "../Images/job4.png",
    place: "Pragmateam",
    jobType: " No office location",
    WorkType1: "javascript",
    WorkType2: "reactjs",
    WorkType3: "node.js",
    WorkType4: "kotlin",
    WorkType5: "tdd",
    post: "2d ago",
    type: "Remote",
  },
];
