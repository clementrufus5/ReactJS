import React from "react";
import HomeNav from "./homeNav";
import { Link } from "react-router-dom";
const AdminLogin = () => {
  return (
    <div>
      <HomeNav />
      <p class="display-6 text-center fw-bold text-primary mt-5 mb-5">
        Admin Login
      </p>
      <form class="w-25 mx-auto border border-primary border-2 rounded-3 p-3">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            User Name
          </label>
          <input
            type="email"
            class="form-control broder border-secondary"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-5">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control border border-secondary"
            id="exampleInputPassword1"
          />
        </div>
        <div class="d-grid gap-2">
          <Link to="/adminPage" type="submit" class="btn btn-primary">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AdminLogin;
