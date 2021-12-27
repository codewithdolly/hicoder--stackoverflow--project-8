import React from "react";
import "./Questions.scss"
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import UserQuestions from "./UserQuestions";

const Questions = () => {
  return (
    <>
      <div className="container-fluid questions">
        <div className="row" style={{ margin: "0 8%" }}>
          <LeftSidebar />
          <div
            className="questions--body col-md-7"
            style={{ fontSize: "12px" }}
          >
            <div>
              <div className="d-flex justify-content-between my-3">
                <h2 className="font-weight-normal">
                  Questions tagged [javascript]
                </h2>
                <button
                  className="btn btn-primary btn-small"
                  style={{ fontSize: "14px" }}
                >
                  Ask Question
                </button>
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <p style={{ fontSize: "16px" }}>22,058,922 questions</p>
              <div className="border">
                <button className="btn  border-right active">Newest</button>
                <button className="btn border-right">Active</button>
                <button className="btn  border-right">
                  Bounced{" "}
                  <small
                    className="bg-primary text-light px-1 rounded"
                    style={{ forntSize: "10px" }}
                  >
                    252
                  </small>
                </button>
                <button className="btn border-right">Unanswered</button>
                <button
                  className="btn dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  More
                </button>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <button class="dropdown-item">Frequents</button>
                  <button class="dropdown-item">Votes</button>
                  <div class="dropdown-divider"></div>
                  <button class="dropdown-item disabled">
                    Unanswered(my tags)
                  </button>
                </div>
              </div>
              <button
                className="btn border"
                style={{
                  color: "rgb(122, 167, 199)",
                  backgroundColor: "rgb(225, 236, 244)",
                }}
              >
                <i class="fas fa-sort-amount-up-alt"></i> Filter
              </button>
            </div>
            <hr />
            <UserQuestions />
          </div>
          <RightSidebar />
        </div>
      </div>
    </>
  );
};

export default Questions;
