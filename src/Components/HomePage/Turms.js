import React from "react";
import "./Turms.scss";
import blue from "../Images/blue.png";
import yellow from "../Images/yellow.png";
import Orange from "../Images/orange.png";
import img1 from "../Images/img1.png";
import img2 from "../Images/img2.png";
import img3 from "../Images/img3.png";
import logo3 from "../Images/logo3.png"

const Turms = () => {
  return (
    <>
      <div className="turms">
        <img
          src={yellow}
          alt="yellow"
          width="140px"
          className="turms--squreImg1"
        />
        <img src={Orange} alt="Orange" className="turms--squreImg2" />

        <div align="center" className="mx-5">
          <img src={img1} alt="yellow" className="mr-5 img" width="500px" />
          <img src={img3} alt="yellow" className="ml-5 img" width="500px" />
        </div>
        <div className="turms--context" align="center">
            <img src={img2} alt=""className="turms--context--img2"/>
          <div>  <img src={logo3} alt="" />
            <h3 className="text-light">Capture your company’s knowledge and context in a discoverable format to <span style={{color:" rgb(242, 116, 13)"}}>unblock your team</span></h3></div>
            <button className="btn btn-primary">Take a tour of Teams</button>
        </div>
      </div>
    </>
  );
};

export default Turms;
