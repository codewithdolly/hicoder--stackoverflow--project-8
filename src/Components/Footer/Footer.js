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
            <Link to= "https://drive.google.com/drive/my-drive">Questions</Link>
          </p>
          <p>
            <Link class="text-reset">Jobs</Link>
          </p>
          <p>
            <Link class="text-reset">Developer Jobs Directory</Link>
          </p>
          <p>
            <Link class="text-reset">Salary Calculator
</Link>
          </p>
        </div>
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 class="text-uppercase fw-bold mb-4">
            Useful Links
          </h6>
          <p>
            <Link class="text-reset">Pricing</Link>
          </p>
          <p>
            <Link class="text-reset">Settings</Link>
          </p>
          <p>
            <Link class="text-reset">Orders</Link>
          </p>
          <p>
            <Link class="text-reset">Help</Link>
          </p>
        </div>

      </div>
    </div>
  </section>

  <div class="text-center p-4 bg-dark">
    © 2021 Copyright:
    <Link class="text-reset fw-bold" href="https://mdbootstrap.com/">created by Dolly</Link>
  </div>
</footer>
        </
        >
    )
}

export default Footer
