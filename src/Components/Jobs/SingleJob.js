import React from "react";
import Reactimg from "../Images/job2.png";

const SingleJob = () => {
  return (
    <>
      <div className="singleJob d-flex m-3">
        <div>
          <img src={Reactimg} alt="" width="60px" className="rounded mr-3" />
        </div>
        <div>
          {" "}
          <h2>Remote Experienced Frontend Engineer - React</h2>
          <div>
            <span>Theorem, LLC –</span>
            <span className="text-muted"> No office location</span>
            <p className="text-warning">Remote</p>
          </div>
          <button className="btn btn-primary mr-1"><i class="fas fa-share-square mr-1"></i> Apply</button>
          <button className="btn btn-outline-primary mr-1">Save</button>
          <button className="btn btn-outline-primary mr-1"><i class="fas fa-ellipsis-h"></i></button>
          <hr />
        </div>
      </div>
    </>
  );
};

export default SingleJob;
