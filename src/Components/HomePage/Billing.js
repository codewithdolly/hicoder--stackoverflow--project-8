import React from "react";

const Billing = () => {
  return (
    <>
    <div className="billing">
    <div class="custom-control custom-switch m-5" align="left">
  <input type="checkbox" class="custom-control-input" id="customSwitch1" />
  <label class="custom-control-label text-light" for="customSwitch1">Toggle this switch element</label>
</div>
      <div class="card" style={{ width: "18rem" }}>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
        </div>
      </div>
    </>
  );
};

export default Billing;
