import React from "react";
import "./KnowledgeSharing.scss";
import knowledgeImg from "../Images/knowledge.png";
import LinesImg from "../Images/lines.png";
import Brand from "../HomePage/Brand";

import AboutTeam from "./AboutTeam";
import Awards from "./Awards";
import Billing2 from "./Billing2";
import ToolIntegrates from "../HomePage/ToolIntegrates";
import SecurityControl from "./SecurityControl";

const KnowledgeSharing = () => {
  return (
    <>
      <div className="container-fluid knowledgeSharing m-5 mb-0">
        <div className="row">
        {/* Knowledge sharing part started */}
          <div className="col-md-5 mr-4">
            <img src={LinesImg} alt="" width="150px" />
            <h1 style={{ fontSize: "40px" }}>
              Knowledge sharing and collaboration without distractions
            </h1>
            <p style={{ fontSize: "20px" }}>
              Stack Overflow for Teams is a{" "}
              <b style={{ backgroundColor: "rgba(192, 192, 192, 0.308)" }}>
                {" "}
                knowledge management & collaboration solution{" "}
              </b>{" "}
              that technologists already trust.
            </p>
            <p className="text-muted mt-5">
              <b>Get started:</b>
            </p>
            <div className="my-4">
              <button
                className="btn btn-dark mr-3"
                style={{ background: "#181A47" }}
              >
                <b>
                  Fot large Orginations <i class="fas fa-building"></i>
                </b>
              </button>
              <button
                className="btn btn-outline"
                style={{ border: "1px solid #181A47", color: "#181A47" }}
              >
                <b>
                  For small Teams <i class="fas fa-user-friends"></i>
                </b>
              </button>
            </div>
          </div>
          {/* Knowledge sharing  part end */}

          {/* Knowledge sharing  Img added */}
          <div className="col-md-5 mr-5">
            <img src={knowledgeImg} alt="" width="600px" className="rounded" />
          </div>
           {/* Knowledge sharing  Img ends */}
        </div>
        <div className="branding">
          <Brand />
        </div>
        <AboutTeam />
        <Awards />
        <Billing2 />
        <ToolIntegrates />
      </div>
      <SecurityControl />
    </>
  );
};

export default KnowledgeSharing;
