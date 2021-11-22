import React from "react";
import { NavLink } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
            <NavLink className="navbar-brand" to="/">
              Exam Portal
            </NavLink>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/student">
                    Students
                  </NavLink>
                </li>
              </ul>
              <div class="container">
                <div class="row row-cols-auto justify-content-md-end">
                  <ul class="col navbar-nav">
                    <li className="nav-item w-100 bg bg-secondary rounded-3 me-3 mb-1">
                      <NavLink
                        className="nav-link text-white text-center"
                        to="/posts"
                      >
                        Posts
                      </NavLink>
                    </li>
                    <li className="nav-item w-100 bg bg-secondary rounded-3 me-3 mb-1">
                      <NavLink
                        className="nav-link text-white text-center"
                        to="/cards"
                      >
                        Cards
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
