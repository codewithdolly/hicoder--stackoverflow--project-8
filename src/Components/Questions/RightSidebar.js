import React from "react";

const RightSidebar = () => {
  return (
    <>
      <div
        className="questions-rightSidebar col-md-3"
        style={{ fontSize: "12px", lineHeight: "10px" }}
      >
        <div className="card">
          <div
            className="card-header"
            style={{ backgroundColor: "rgb(241, 229, 188)" }}
          >
            {" "}
            <b>The Overflow Blog</b>
          </div>
          <div
            className="card-body"
            style={{ backgroundColor: "rgb(251, 243, 213)" }}
          >
            {blog.map((content) => {
              return (
                <div className="d-flex">
                  <i class="fas fa-pen mr-2"></i>
                  <p>{content}</p>
                </div>
              );
            })}
          </div>
          <div
            className="card-header"
            style={{ backgroundColor: "rgb(241, 229, 188)" }}
          >
            <b>Featured on Meta</b>
          </div>
          <div
            className="card-body"
            style={{ backgroundColor: "rgb(251, 243, 213)" }}
          >
            {meta.map((content) => {
              return (
                <div className="d-flex">
                  <i
                    class="far fa-comment-alt mr-2"
                    style={{ color: "rgb(122, 167, 199)" }}
                  ></i>
                  <p>{content}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default RightSidebar;

const meta = [
  `Providing a JavaScript API for userscripts`,
  `Congratulations to the 59 sites that just left Beta`,
];

const blog = [
  `Best practices for writing code comments`,
  ` Sequencing your DNA with a USB dongle and open source code`,
];
