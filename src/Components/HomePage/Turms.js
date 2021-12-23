import React from "react";
import "./Turms.scss";
import blue from "../Images/blue.png";
import yellow from "../Images/yellow.png";
import Orange from "../Images/orange.png";
import img1 from "../Images/img1.png";
import img2 from "../Images/img2.png";
import img3 from "../Images/img3.png";
import logo3 from "../Images/logo3.png";
import Billing from "./Billing";
import ToolIntegrates from "./ToolIntegrates";
import Management from "./Management";

const Turms = () => {
  return (
    <>
      <div className="turms">
        <img
          src={yellow}
          alt="yellow"
          width="140px"
          className="turms--squreImg1"
        />
        <img src={Orange} alt="Orange" className="turms--squreImg2" />

        <div align="center" className="mx-5">
          <img src={img1} alt="yellow" className="mr-5 img" width="500px" />
          <img src={img3} alt="yellow" className="ml-5 img" width="500px" />
        </div>
        <div className="turms--context" align="center">
          <img src={img2} alt="" className="turms--context--img2" />
          <div>
            {" "}
            <img src={logo3} alt="" />
            <h2
              style={{ fontSize: "3rem", margin: "2rem 7rem", color: "white" }}
            >
              Capture your company’s knowledge and context in a discoverable
              format to{" "}
              <span style={{ color: " rgb(242, 116, 13)" }}>
                unblock your team
              </span>
            </h2>
          </div>
          <button className="btn btn-primary">Take a tour of Teams</button>
          <img src={blue} alt="squre" className="float-right mt-5 mr-4"  />
          <div className="d-flex m-5 p-5">
            {productivity.map((teams) => {
              return (
                <div className="m-4">
                  <i class="fas fa-check-circle text-success"></i>
                  <h3 className="text-light">{teams.header}</h3>
                  <p className="text-muted">{teams.content}</p>
                </div>
              );
            })}
            
          </div>
          <img src={yellow} alt="squre" className="float-left mb-5 mr-4"  />
          <div className="mx-5">
            {" "}
            <hr className="m-5 bg-secondary" />
          </div>
          <h2
            style={{
              fontSize: "3rem",
              margin: "2rem 7rem 1rem 7rem",
              color: "white",
            }}
          >
            Ensure your company stays on course
          </h2>
          <h5 className="text-light">
            Here are just a few types of technologists that we help.
          </h5>
          <div className="d-flex m-5 p-5">
            {cources.map((teams) => {
              return (
                <div className="m-3">
                  <div>{teams.icon}</div>
                  <h4 className="text-light">{teams.header}</h4>
                  <p className="text-muted">{teams.content}</p>
                </div>
              );
            })}
          </div>
          <img src={Orange} alt="squre" className="float-right mb-5 pb-4"  />
          <Billing />
          <ToolIntegrates />
          <Management />
        </div>
        
      </div>
    </>
  );
};

export default Turms;

const productivity = [
  {
    header: "Increase productivity",
    content:
      "If somebody somewhere has the right answer, suddenly you have it too. Collaborate better in a remote-first world.",
  },
  {
    header: "Accelerate time to market",
    content:
      "Shorten the time between initial idea and complete product. Take delays and misinformation out of the equation.",
  },
  {
    header: "Protect institutional",
    content:
      "People come and people go, but if you capture their contributions in one central place, that expertise sticks around.",
  },
];

const cources = [
  {
    icon: <i class="fas fa-rocket icon"></i>,
    header: "DevOps engineers",
    content:
      "Shipping new products and features requires teamwork and coordination. Forget checklists and long docs no one ever reads.",
  },
  {
    icon: <i class="fas fa-chart-line icon"></i>,
    header: "Data scientists",
    content:
      "Business decisions are better when backed by data. Give visibility to the data that support your strategies.",
  },
  {
    icon: <i class="fas fa-cogs icon"></i>,
    header: "Software engineers",
    content:
      "Help engineers be more efficient and streamline knowledge sharing using a tool they already love and trust.",
  },
  {
    icon: <i class="fas fa-users icon"></i>,
    header: "Support teams",
    content:
      "Level up your support by providing information to your customers using a natural interface: questions and answers.",
  },
  {
    icon: <i class="fas fa-user-tie icon"></i>,
    header: "Engineering leaders",
    content:
      "Help your team get the information they need to do their job - reduce burnout and help engineers grow and learn together.",
  },
];
