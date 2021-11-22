import React from "react";
import { Link } from "react-router-dom";
import HomeNav from "./homeNav";
const STudentRegister = () => {
  return (
    <div>
      <HomeNav />
      <p class="display-6 text-center fw-bold text-primary mt-4">Register</p>
      <form class="row g-3 w-50 mx-auto border border-primary border-3 rounded-3 p-3 mt-3">
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">
            Email
          </label>
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroupPrepend2">
                @
              </span>
            </div>
            <input type="email" class="form-control" id="inputEmail4" />
          </div>
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">
            Password
          </label>
          <input type="password" class="form-control" id="inputPassword4" />
        </div>
        <div class="col-12">
          <label for="first name" class="form-label">
            First Name
          </label>
          <input
            type="text"
            class="form-control"
            id="firstname"
            placeholder="first name"
          />
        </div>
        <div class="col-12">
          <label for="last name" class="form-label">
            Last Name
          </label>
          <input
            type="text"
            class="form-control"
            id="lastname"
            placeholder="last name"
          />
        </div>
        <div class="col-md-6">
          <label for="inputState" class="form-label">
            Gender
          </label>
          <select id="inputState" class="form-select">
            <option selected>select-!-</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div class="col-12">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck" />
            <label class="form-check-label" for="gridCheck">
              Check me out
            </label>
          </div>
        </div>
        <div>
          Already have an account ? click <a href="login.html">here</a> to login
        </div>
        <div>
          click <a href="boot1.html">here</a> to dashboard
        </div>
        <div class="col-12 d-grid ">
          <Link to="/studentLogin" type="submit" class="btn btn-primary">
            Sign in
          </Link>
        </div>
      </form>
    </div>
  );
};

export default STudentRegister;
