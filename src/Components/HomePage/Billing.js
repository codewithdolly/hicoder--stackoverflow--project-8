import React from "react";

const Billing = () => {
  return (
    <>
    <div className="billing " >
    <div class="custom-control custom-switch m-5" align="left">
  <input type="checkbox" class="custom-control-input p-4" id="customSwitch1" />
  <label class="custom-control-label text-light" for="customSwitch1">Annual billing discount</label>
</div>
      <div class="card " style={{ width: "20rem" }}>
        <div class="card-body " align="left" >
        <button className="btn btn-warning px-4">Free</button>
        <h4>Free</h4>
          <p class="card-title  text-muted">No credit card required</p>
          <hr />
          <p class="card-text"><i class="fas fa-bullhorn mr-2"></i>
          ChatOps integrations - Slack & Microsoft Teams
          </p>
          <p class="card-text">
          <i class="fas fa-award mr-2"></i>Your own private space hosted on stackoverflow.com
          </p>
          <p class="card-text">
          <i class="fas fa-box mr-2"></i> Structured and searchable knowledge base
          </p>
          <button class="btn btn-primary btn-block">
            Create a free team
          </button> <br />
          <p className="text-muted"align="center"><small>Always free up to 50 teammates</small></p>
        </div>
        </div>
      </div>
    </>
  );
};

export default Billing;
