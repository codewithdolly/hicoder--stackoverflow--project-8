import React from 'react'
import "./Jobs.scss"

const Jobs = () => {
    return (
        <>
            <div classNameName='jobs'>
                <nav className="navbar navbar-expand-lg navbar-light  mx-5 px-5 jobs--header">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <a className="nav-link" href="#">Overview <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Why Stack Overflow
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Pricing <span className="sr-only">(current)</span></a>
      </li>
            <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Resources
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Case Studies</a>
          <a className="dropdown-item" href="#">Use Cases</a>
          <a className="dropdown-item" href="#">Help Cewneter</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Calculaters</a>
          <a className="dropdown-item" href="#">Reduce Support Ticket</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Resoure center</a>
          <a className="dropdown-item" href="#">Videos and more</a>
        </div>
      </li>
    </ul>
    <div className="my-2 my-lg-0">
      <button className="btn btn-outline-success my-sm-0" type="submit">Search</button>
    </div>
  </div>
</nav>
                </div>
                
        </>
    )
}

export default Jobs
