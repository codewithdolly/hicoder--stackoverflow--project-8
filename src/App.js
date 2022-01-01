import "./App.scss";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import logo from "./Components/Images/logo1.png";
import { HomePage, Footer, About, Team, Products, Questions, RegisterPage, LoginPage, Jobs } from "./Components";

const App = () => {
  return (
    <>
      <Router>
        <nav className="app navbar navbar-expand-lg navbar-light bg-light px-5">
          <span className="navbar-toggler-icon mx-2 ml-5"></span>

          <Link to="/" className="navbar-brand">
            <img src={logo} alt="" width="160px" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item mx-4 active">
                <Link to="/about" className="nav-link">
                  About <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li lassName="nav-item mr-4">
                <Link to="/" className="nav-link">
                  Products
                </Link>
              </li>
              <li className="nav-item mr-4">
                <Link to="/questions" className="nav-link">
                  Questions
                </Link>
              </li>
              <li className="nav-item mr-4">
                <Link to="/jobs" className="nav-link">
                  Jobs
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/team" className="nav-link">
                  For Team
                </Link>
              </li>
            </ul>
            <form className="form-inline mx-2 my-lg-0 mr-5">
              <span className="fas fa-search search"></span>
              <input
                type="text"
                className="form-control pr-5 pl-4 searchInput"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
                placeholder="Search..."
              />
              <Link to="/login" className="nav-link">
              <button
                className="btn btn-outline-primary my-sm-0 btn-sm px-3"
                type="submit"
                style={{ backgroundColor: "#e3f2fd", color: "gray" }}
              >
                Log in
              </button>
                </Link>

              <Link to="/signup" className="nav-link">
              <button
                className="btn btn-primary my-sm-0 btn-sm px-3"
                type="submit"
              >
             
                Sign Up
              </button>
                </Link>
             
            </form>
          </div>
        </nav>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="about" element={<About />} />
          <Route path="" element={<Products />} />
          <Route path="team" element={<Team />} />
          <Route path="questions" element={<Questions />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="login" element={ <LoginPage /> } />
          <Route path="signup" element={<RegisterPage />} />
          <Route path="footer" element={<Footer />}>
          <Route path=":questions" element={<Footer />} />
          </Route>
          <Route path="" element={<p>Please select something</p>} />
        </Routes>

      </Router>
    </>
  );
};

export default App;
