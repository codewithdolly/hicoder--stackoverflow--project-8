import React from 'react';
import "./Footer.scss";
import logo from "../Images/logo3.png";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
<footer class="Footer text-lg-start bg-dark text-muted py-5">
  <section class="">
    <div class="container text-md-start mt-5">
  
      <div class="row mt-3">
   
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 ">
   <img src={logo} alt=""/>
        </div>
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 class="text-uppercase fw-bold mb-4">
          STACK OVERFLOW
          </h6>
          <p>
            <a to= "https://drive.google.com/drive/my-drive">Questions</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Jobs</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Developer Jobs Directory</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Salary Calculator
</a>
          </p>
        </div>
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 class="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <a href="#!" class="text-reset">Pricing</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Settings</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Orders</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Help</a>
          </p>
        </div>

      </div>
    </div>
  </section>

  <div class="text-center p-4 bg-dark">
    © 2021 Copyright:
    <a class="text-reset fw-bold" href="https://mdbootstrap.com/">created by Dolly</a>
  </div>
</footer>
        </
        >
    )
}

export default Footer
