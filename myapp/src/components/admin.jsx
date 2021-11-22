import React, { Component } from "react";
import "../styles.css";
import { Link } from "react-router-dom";
class Admin extends React.Component {
  render() {
    return (
      <div>
        <div className="rowcard mt-5">
          <div className="columncard">
            <Link className="card" to="/cards/admin/student">
              <div className="content">
                <div className="front">
                  <img
                    className="profile"
                    width="100%"
                    src="https://www.employerlive.com/blogimgs/Online-courses_blog10.jpg"
                    alt="courses"
                  />
                </div>
                <div class="back from-left">
                  <h2>All Courses</h2>
                  <h3>Courses instructed by Admin</h3>
                  <h3>See also</h3>
                </div>
              </div>
            </Link>
            <div className="card mt-5">
              <div className="content">
                <div className="front">
                  <img
                    className="profile"
                    width="100%"
                    src="https://images.hindustantimes.com/img/2021/09/07/550x309/results_222603a6-641a-11e8-b4a9-2154dcd09999_1631012392715.jpg"
                    alt="courses"
                  />
                </div>
                <div class="back from-left">
                  <h2>Results</h2>
                  <h3>Check your results</h3>
                  <h3>See also</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Admin;
