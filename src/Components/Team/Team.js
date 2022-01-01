import React from "react";
import KnowledgeSharing from "./KnowledgeSharing";
import "./Team.scss";
import Footer from "../Footer/Footer";
import SecurityControl from "./SecurityControl";
import { Link } from "react-router-dom";


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
                 <Link to= "/" className="nav-link team-miniNav miniNav1"  >
                  Overview <span className="sr-only">(current)</span>
                 </Link>
              </li>
              <li className="nav-item dropdown">
                 <Link to= "/"
                  className="nav-link dropdown-toggle team-miniNav"
                   
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Why Stack Overflow
                 </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                   <Link to= "/" className="dropdown-item"  >
                    Take a tour
                   </Link>
                   <Link to= "/" className="dropdown-item"  >
                    Articls
                   </Link>
                   <Link to= "/" className="dropdown-item"  >
                    Content Health{" "}
                    <button className="btn btn-sm ml-4 learnbtn" type="submit">
                      <small>new</small>
                    </button>
                   </Link>

                   <Link to= "/" className="dropdown-item"  >
                    Integrations
                   </Link>
                   <Link to= "/" className="dropdown-item"  >
                    Security
                   </Link>
                  <div className="dropdown-divider"></div>
                   <Link to= "/" className="dropdown-item"  >
                    Customer Access
                   </Link>
                </div>
              </li>
              <li className="nav-item">
                 <Link to= "/" className="nav-link team-miniNav"  >
                  Pricing <span className="sr-only">(current)</span>
                 </Link>
              </li>
              <li className="nav-item dropdown">
                 <Link to= "/"
                  className="nav-link dropdown-toggle team-miniNav"
                   
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Resources
                 </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                   <Link to= "/" className="dropdown-item"  >
                    Case Studies
                   </Link>
                   <Link to= "/" className="dropdown-item"  >
                    Use Cases
                   </Link>
                   <Link to= "/" className="dropdown-item"  >
                    Help Cewneter
                   </Link>
                  <div className="dropdown-divider"></div>
                   <Link to= "/" className="dropdown-item"  >
                    Calculaters
                   </Link>
                   <Link to= "/" className="dropdown-item"  >
                    Reduce Support Ticket
                   </Link>
                  <div className="dropdown-divider"></div>
                   <Link to= "/" className="dropdown-item"  >
                    Resoure center
                   </Link>
                   <Link to= "/" className="dropdown-item"  >
                    Videos and more
                   </Link>
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
        {/* adding KnowledgeSharing 2nd part */}
        <KnowledgeSharing />
      </div>

      {/* adding SecurityControl 3rd part*/}
      <SecurityControl />

      {/* adding Footer 4th part */}
      <Footer />
    </>
  );
};

export default Team;
