import React from "react";
import "./ToolIntegrates.scss";
import microsoft from "../Images/microsoft.png";
import Slack from "../Images/slack.png";
import MicrosoftLogo from "../Images/tool2.png";
import SlackLogo from "../Images/tool1.png";
import Github from "../Images/tool3.png";
import jira from "../Images/tool4.png";
import okta from "../Images/tool5.png";
import blue from "../Images/blue.png";
import Orange from "../Images/orange.png";

const ToolIntegrates = () => {
  return (
    <>
      {/* Integrates tools started */}
      <div className="toolIntegrates">
        <div className="toolIntegrates d-flex justify-content-between my-5 py-5">
          {/* left img */}
          <div className="d-block">
            <img src={microsoft} alt="microsoft" width="450px" />
            <div className="d-flex justify-content-center">
              <img
                src={MicrosoftLogo}
                alt="MicrosoftLogo"
                width="50px"
                className=""
              />
              <h5 className="text-light ml-1 align-self-center">Microsoft</h5>
            </div>
            <img
              src={blue}
              alt=""
              className="float-left"
              style={{ marginTop: "10rem" }}
            />
          </div>
          {/* left img ends*/}

          {/* center contaent starts */}
          <div className="text-light mt-5 pt-5 ml-5">
            <h1>Integrates with and improves other tools</h1>
            <h5 style={{ color: "silver", fontFamily: "sans-serif" }}>
              All plans come with integrations for ChatOps tools{" "}
              <span className="text-primary">Slack</span> &{" "}
              <span className="text-primary">Microsoft Teams</span> in order to
              cut down on pings, limit distractions and make the tools even more
              powerful. Business and Enterprise customers get access to Jira,
              GitHub & Okta integrations.
            </h5>
            <div className="d-flex ml-5 pl-5 my-4">
              <img
                src={SlackLogo}
                alt="Slack"
                width="50px"
                className="rounded mx-1 bg-light"
              />
              <img
                src={MicrosoftLogo}
                alt="Slack"
                width="50px"
                className="rounded mx-1 bg-light"
              />
              <img
                src={Github}
                alt="Slack"
                width="50px"
                className="rounded mx-1"
              />
              <img
                src={jira}
                alt="Slack"
                width="50px"
                className="rounded mx-1"
              />
              <img
                src={okta}
                alt="Slack"
                width="50px"
                className="rounded mx-1"
              />
            </div>
            <h5
              style={{
                color: "silver",
                marginTop: "4rem",
                fontFamily: "sans-serif",
              }}
            >
              Some of the premium features available with paid tiers.
            </h5>
          </div>
          <div>
            {/* center contaent ends */}

            {/* right img stated */}
            <div className="d-block">
              <div className="d-flex">
                <img
                  src={SlackLogo}
                  alt="SlackLogo"
                  width="50px"
                  className=" ml-5"
                />
                <h5 className="text-light ml-1 align-self-center">Slack</h5>
              </div>
              <img src={Slack} alt="Slack" width="450px" />
            </div>
            <img src={Orange} alt="" className="float-right" width="140px" />
          </div>
          {/* right img ends */}
        </div>
      </div>
      {/* Integrates tools ends */}
    </>
  );
};

export default ToolIntegrates;
