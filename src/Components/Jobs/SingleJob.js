import React from "react";
import Reactimg from "../Images/job2.png";
import SingleJobInDetails from "./SingleJobInDetails";

const SingleJob = () => {
  return (
    <>
      <div className="singleJob d-flex my-3 mx-2">
        <div>
          <img src={Reactimg} alt="" width="60px" className="rounded mr-3" />
        </div>
        <div>
          {" "}
          <h4>Remote Experienced Frontend Engineer - React</h4>
          <div>
            <span>Theorem, LLC –</span>
            <span className="text-muted"> No office location</span>
            <p className="text-warning">Remote</p>
          </div>
          <div className="mb-4">
            <button className="btn btn-primary mr-1">
              <i class="fas fa-share-square mr-1"></i> Apply
            </button>
            <button className="btn btn-outline-primary mr-1">Save</button>
            <button className="btn btn-outline-primary mr-1">
              <i class="fas fa-ellipsis-h"></i>
            </button>
          </div>
          {/* adding job option */}
          <hr />
          <div className="d-flex justify-content-between align-items-center">
            <div>
              {" "}
              <button className="btn jobBTN btn1"> Overview</button>
              <button className="btn jobBTN"> Company</button>
              <button className="btn jobBTN"> Developer culture</button>
            </div>
            <div>
              <div className="d-flex mt-3">
                <p>React to this job: </p>
                <div className="mx-1 ml-2">
                  <i class="fas fa-thumbs-up mr-1"></i>0
                </div>
                <div className="mx-1">
                  <i class="fas fa-thumbs-down mr-1"></i>0
                </div>
                <div className="mx-1">
                  <i class="fas fa-heart mr-1"></i>1
                </div>
              </div>
            </div>
          </div>
          <hr />
          {/* adding job option added*/}

          {/* SingleJob in deatails part adding */}
          <SingleJobInDetails />
        </div>
      </div>
    </>
  );
};

export default SingleJob;
