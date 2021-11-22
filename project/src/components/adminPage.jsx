import React, { Component } from "react";
import "../stylesheets/styles.css";
import { Link } from "react-router-dom";
import HomeNav from "./homeNav";
class AdminPage extends React.Component {
  render() {
    return (
      <div>
        <HomeNav />
        <div className="rowcard mt-5">
          <div className="columncard">
            <Link
              className="card card1 mb-4"
              to="/studentPage/studentGetAllCourses"
            >
              <div className="content">
                <div className="front">
                  <img
                    className="profile"
                    width="50%"
                    src="https://noxa.in/wp-content/uploads/2019/03/17778.jpg"
                    alt="courses"
                  />
                </div>
                <div className="back from-left">
                  <h2 className="text-black">Update Courses</h2>
                  <h3 className="text-black">
                    Courses get be updated and deleted
                  </h3>
                  <h3 className="text-black">See also</h3>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminPage;
