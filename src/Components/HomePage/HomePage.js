import React from "react";
import "./HomePage.scss";
import secure from "../Images/secure.png";
import search from "../Images/search.png";

const HomePage = () => {
  return (
    <>
      <div className="homePage fixed">
        <div className="homePage--innerDiv bg-dark text-light">
          <div className="homePage--innerDiv--box align-middle">
            <div className="homePage--innerDiv--box--find">
              <img src={search} alt="search" />
              <p>
                Find the best answer to your technical question, help others
                answer theirs
              </p>
              <button
                type="button"
                className="homePage--innerDiv--box--find--btn btn"
              >
                Join the Community
              </button>
              <br />
              <small style={{ color: "gray" }}>
                or{" "}
                <a
                  style={{ color: "black", textDecoration: "underline" }}
                  href="#"
                >
                  search content
                </a>
              </small>
            </div>
            <div className="homePage--innerDiv--box--secure">
              <img src={secure} alt="search" />
              <p>Want a secure, private space for your technical knowledge?</p>

              <p style={{ marginBottom: "-1rem" }}>Get started</p>
              <hr text-primary />
              <button type="button" className="btn btn-primary mr-2">
                For large orginations<i class="fas fa-dice-d20"></i>
              </button>
              <button type="button" className="btn btn-primary">
                For Small teams <i class="fas fa-user-friends"></i>
              </button>
            </div>
          </div>
          <h1 className="homePage--innerDiv--header">Every has a data <span>Data Developer</span> tab open to Stack Overflow</h1>
          <div class="homePage--innerDiv--plain" ></div>
          <div>
            <h2>100+ million</h2>
            <p>monthly visitors to Stack</p>
            <p>Overflow & Stack Exchange</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
