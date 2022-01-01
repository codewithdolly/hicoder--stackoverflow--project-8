import React from "react";
import { Link } from "react-router-dom";
import FundedCompany from "./FundedCompany";

const FundAndCollaboration = () => {
  return (
    <>
      <div className="fundAndCollaboration">
        <div className="d-flex m-5" style={{ color: "gray", fontSize: "18px" }}>
        {/* Founded page left starts*/}
          <div className="m-5">
            <p>
              Founded in 2008, Stack Overflow’s public platform is used by
              nearly everyone who codes to learn, share their knowledge,
              collaborate, and build their careers.
            </p>
            <p>
              Our products and tools help developers and technologists in life
              and at work. These products include{" "}
              <Link to="/">Stack Overflow for Teams</Link>,{" "}
              <Link to="/">Stack Overflow Advertising</Link>, and Stack Overflow
              for <Link to="/">Talent</Link> and <Link to="/">Jobs.</Link>
            </p>
          </div>
          {/* Founded page left ends */}

          {/* collaboration page right starts*/}
          <div className="m-5">
            <p>
              Stack Overflow for Teams, our core SaaS collaboration product, is
              helping thousands of companies around the world make the
              transition to remote work, address business continuity challenges,
              and undergo digital transformation.
            </p>
            <p>
              Whether it’s on Stack Overflow or within Stack Overflow for Teams,
              community is at the center of all that we do.
            </p>
          </div>
        </div>
 {/* collaboration page right ends*/}

 {/* Funded company adding */}
 <FundedCompany />
      </div>
    </>
  );
};

export default FundAndCollaboration;
