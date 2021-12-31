import React from "react";
import KnowledgeSharing from "./KnowledgeSharing";
import "./Team.scss";
import Footer from "../Footer/Footer";
import SecurityControl from "./SecurityControl";

const Team = () => {
  return (
    <>
      <div classNameName="team m-0 p-5" style={{ backgroundColor: "menu" }}>
        {/* sub-navbar added */}
        <nav className="navbar navbar-expand-lg navbar-light mx-5 px-5 team--header">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Overview <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Why Stack Overflow
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">
                    Take a tour
                  </a>
                  <a className="dropdown-item" href="#">
                    Articls
                  </a>
                  <a className="dropdown-item" href="#">
                    Content Health{" "}
                    <button className="btn btn-sm ml-4 learnbtn" type="submit">
                      <small>new</small>
                    </button>
                  </a>

                  <a className="dropdown-item" href="#">
                    Integrations
                  </a>
                  <a className="dropdown-item" href="#">
                    Security
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    Customer Access
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Resources
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">
                    Case Studies
                  </a>
                  <a className="dropdown-item" href="#">
                    Use Cases
                  </a>
                  <a className="dropdown-item" href="#">
                    Help Cewneter
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    Calculaters
                  </a>
                  <a className="dropdown-item" href="#">
                    Reduce Support Ticket
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    Resoure center
                  </a>
                  <a className="dropdown-item" href="#">
                    Videos and more
                  </a>
                </div>
              </li>
            </ul>
            <div className="bg-light d-flex learn align-content-center mt-3">
              <p
                className="py-2 pl-2"
                style={{ backgroundColor: "white", borderRadius: "10px" }}
              >
                Built for large organizations{" "}
              </p>
              <div>
                {" "}
                <button className="btn text-dark learnbtn" type="submit">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </nav>
        {/* sub-navbar ends */}
      </div>
      {/* adding KnowledgeSharing 2nd part */}
      <KnowledgeSharing />

      {/* adding SecurityControl 3rd part*/}
      <SecurityControl />

      {/* adding Footer 4th part */}
      <Footer />
    </>
  );
};

export default Team;
