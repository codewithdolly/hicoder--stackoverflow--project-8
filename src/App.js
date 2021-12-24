import "./App.scss";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from "./Components/Images/logo1.png";
import { HomePage, Footer, About } from "./Components";

const App = () => {
  return (
    <>
      <Router>
        <nav class="app navbar navbar-expand-lg navbar-light bg-light px-5">
          <span class="navbar-toggler-icon mx-2 ml-5"></span>

          <Link class="navbar-brand">
            <img src={logo} alt="" width="160px" />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item mx-4 active">
                <Link to="/about" class="nav-link">
                  About <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li to="/product" class="nav-item mr-4">
                <Link class="nav-link">Products</Link>
              </li>
              <li class="nav-item">
                <Link to="/turn" class="nav-link">
                  For Turms
                </Link>
              </li>
            </ul>
            <form class="form-inline mx-2 my-lg-0 mr-5">
              <span class="fas fa-search search"></span>
              <input
                type="text"
                class="form-control pr-5 pl-4 searchInput"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
                placeholder="Search..."
              />
              <button
                class="btn btn-outline-primary ml-2 my-sm-0 btn-sm px-2"
                type="submit"
                style={{ backgroundColor: "#e3f2fd", color: "gray" }}
              >
                Log in
              </button>
              <button
                class="btn btn-primary mx-2 my-sm-0 btn-sm px-2"
                type="submit"
              >
                Sign Up
              </button>
            </form>
          </div>
        </nav>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/product">
            <About />
          </Route>
          <Route path="/turn">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        {/* <HomePage /> */}
        {/* <Footer /> */}
      </Router>
    </>
  );
};

export default App;
