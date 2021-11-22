import React from "react";
import { NavLink } from "react-router-dom";

const HomeNav = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <i class="bi bi-house-door"></i>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default HomeNav;
