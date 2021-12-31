import React from "react";
import "./LoginPage.scss";
import { Link } from "react-router-dom";
import Logo from "../Images/logo2.png";
import gLogo from "../Images/g.png";

const LoginPage = () => {
  return (
    <>
      <div className="container loginPage">
        <form className="border px-5 pb-5 m-5 loginPage--form">
          <div className="loginPage--form--img">
            <img src={Logo} alt="" width="120px" />
            <h3 className="center mt-2">Login</h3>
          </div>

          {/* Input Box startes */}
          <div className="form-outline mb-4">
            <label className="form-label" for="form1Example23">
              Your Email
            </label>
            <div class="input-group flex-nowrap">
              <div class="input-group-prepend">
                <span
                  class="input-group-text"
                  id="addon-wrapping"
                  style={{
                    color: "rgb(242, 116, 13)",
                    backgroundColor: "rgba(242, 116, 13, 0.308)",
                  }}
                >
                  <i class="fas fa-envelope"></i>
                </span>
              </div>
              <input
                type="text"
                class="form-control"
                placeholder="@gmail.com"
                aria-label="gmail"
                aria-describedby="addon-wrapping"
              />
            </div>
          </div>
          <div className="form-outline mb-4">
            <label className="form-label" for="form1Example23">
              Password
            </label>
            <div class="input-group flex-nowrap">
              <div class="input-group-prepend">
                <span
                  class="input-group-text"
                  id="addon-wrapping"
                  style={{
                    color: "rgb(242, 116, 13)",
                    backgroundColor: "rgba(242, 116, 13, 0.308)",
                  }}
                >
                  <i class="fas fa-key"></i>
                </span>
              </div>
              <input
                type="text"
                class="form-control"
                placeholder="Password"
                aria-label="Username"
                aria-describedby="addon-wrapping"
              />
            </div>
          </div>
          {/* Input Box Ends */}

          {/* Remember me startes */}
          <div className="d-flex justify-content-between mb-4">
            <div className="form-check mb-2">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="form1Example3"
              />
              <label className="form-check-label" for="form1Example3">
                {" "}
                Remember me{" "}
              </label>
            </div>
            <Link to="/">
              <small> forgot Password?</small>
            </Link>
          </div>
          {/* Remember me Ends */}

          {/* Signup Buttons starts */}
          <button
            type="submit"
            className="btn btn-lg btn-block btn-sm text-light"
            style={{ backgroundColor: "rgb(10, 149, 255)" }}
          >
            Sign up
          </button>
          <button
            type="submit"
            className="btn btn-lg btn-block bg-light btn-sm border"
          >
            <img src={gLogo} alt="" width="15px" className="mr-1" />
            Google
          </button>
          <button
            type="submit"
            className="btn bt btn-lg btn-block btn-sm text-light"
            style={{ backgroundColor: "rgb(56, 84, 153)" }}
          >
            <i class="fab fa-facebook-square mr-2"></i>
            Facebook
          </button>
          {/* Signup Buttons Ends */}
        </form>
      </div>
    </>
  );
};

export default LoginPage;
