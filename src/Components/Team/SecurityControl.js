import React from "react";
import "./SecurityControl.scss";
import lock2 from "../Images/lock2.png";

const SecurityControl = () => {
  return (
    <>
      <div className="securityControl bg-light">
      {/* security controls starts */}
        <div className="text-center pt-5">
          <h2>Robust security controls</h2>
          <p>
            Trusted by thousands of customers to keep their proprietary data
            safe
          </p>
          <button
            className="btn text-light"
            style={{ backgroundColor: "#007bff" }}
          >
            {" "}
            More about secourity
          </button>
        </div>

        <div className="m-5 py-5">
          <div className="d-flex ">
            <i class="fas fa-check text-success  mr-2"></i>
            <p>GDPR & Standard Contractual Clauses (SCC) for data transfers</p>
          </div>
          <div className="d-flex">
            <i class="fas fa-check text-success  mr-2"></i>
            <p>SOC 2 Type II report</p>
            <div>
              <button
                className="btn btn-sm text-light mx-2"
                style={{ backgroundColor: "#2b2d6e" }}
              >
                Enterprise{" "}
              </button>
            </div>
          </div>
          <div className="d-flex">
            <i class="fas fa-check text-success  mr-2"></i>
            <p>Single sign-on (SSO) - SAML, AD</p>
            <div>
              <button className="btn btn-sm bg-light text-dark border mx-2">
                Basic{" "}
              </button>
              <button className="btn btn-sm bg-dark text-light mr-2">
                Business{" "}
              </button>
              <button
                className="btn btn-sm text-light mr-2"
                style={{ backgroundColor: "#2b2d6e" }}
              >
                Enterprise{" "}
              </button>
            </div>
          </div>
          <div className="d-flex">
            <i class="fas fa-check text-success  mr-2"></i>
            <p>SCIM provisioning </p>{" "}
            <div>
              <button className="btn btn-sm bg-dark text-light mx-2">
                Business{" "}
              </button>
              <button
                className="btn btn-sm text-light mr-2"
                style={{ backgroundColor: "#2b2d6e" }}
              >
                Enterprise{" "}
              </button>
            </div>
          </div>
        </div>
          {/*security controls ends */}
      </div>
    </>
  );
};

export default SecurityControl;
