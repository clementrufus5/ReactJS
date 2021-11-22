import React from "react";
import { Link } from "react-router-dom";
import HomeNav from "./homeNav";
const StudentLogin = () => {
  return (
    <div>
      <HomeNav />
      <p class="display-6 text-center fw-bold text-primary mt-5 mb-5">
        Student Login
      </p>
      <form class="w-25 mx-auto border border-primary border-2 rounded-3 p-3">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            User Name
          </label>
          <input
            type="email"
            class="form-control border border-secondary"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-4">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control border border-secondary"
            id="exampleInputPassword1"
          />
        </div>
        <div class="d-grid">
          <Link to="/studentPage" type="submit" class="btn btn-primary mb-3">
            Login
          </Link>
        </div>
        <div>
          Don't have account? click <Link to="/studentRegister">here</Link> to
          Register
        </div>
      </form>
    </div>
  );
};

export default StudentLogin;
