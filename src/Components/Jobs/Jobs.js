import React from 'react'
import "./Jobs.scss"

const Jobs = () => {
    return (
        <>
            <div className='jobs'>
                <nav class="navbar navbar-expand-lg navbar-light  mx-5 p-5 jobs--header">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" href="#">Overview <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Why Stack Overflow
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing <span class="sr-only">(current)</span></a>
      </li>
            <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Resources
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Case Studies</a>
          <a class="dropdown-item" href="#">Use Cases</a>
          <a class="dropdown-item" href="#">Help Cewneter</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Calculaters</a>
          <a class="dropdown-item" href="#">Reduce Support Ticket</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Resoure center</a>
          <a class="dropdown-item" href="#">Videos and more</a>
        </div>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
                </div>
                
        </>
    )
}

export default Jobs
