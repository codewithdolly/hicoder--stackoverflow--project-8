import React from "react";
import empowerImg from "../Images/empowerImg.png";

const EmpoweringWorld = () => {
  return (
    <>
      <div className="d-flex my-5">
      
      {/* Empowering right side part img */}
        <div>
          <img src={empowerImg} alt="" width="700px" />
        </div>
        {/* Empowering right side part start */}
        <div className="mx-5 mt-5">
          <h5 className="text-muted py-3">Who we are</h5>
          <h1>
            Empowering the world to develop technology through collective
            knowledge.
          </h1>
          <p>
            Our public platform serves 100 million people every month, making it
            one of the 50 most popular websites in the world.
          </p>
          <p>
            Our asynchronous knowledge management and collaboration offering
            Stack Overflow for Teams, is transforming how people work.
          </p>
        </div>
        {/* Empowering right side part ends */}
      </div>

      {/* visiters box starts */}
      <div className="d-flex align-items-baseline mx-5 mb-5 shadow p-3 mb-5 bg-white rounded">
        {visiters.map((visit) => {
          return (
            <div className=" border-right pr-5 p-3 text-center">
              <h5>
                <b>{visit.header}</b>
              </h5>
              <p>{visit.text1}</p>
            </div>
          );
        })}
      </div>
      {/* visiters box ends */}
    </>
  );
};

export default EmpoweringWorld;

// visiters obj details
const visiters = [
  {
    header: "100+ million",
    text1: "Monthly visitors to our network",
  },
  {
    header: "21+ Million",
    text1: "Questions asked to-date",
  },
  {
    header: "13.6 seconds",
    text1: "Average time between new questions",
  },
  {
    header: "50.6+ Billion",
    text1: "Times a developer got help",
  },
  {
    header: "10,000+",
    text1: "Customer companies for all products",
  },
];
