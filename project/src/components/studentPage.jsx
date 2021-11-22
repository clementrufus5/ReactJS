import React, { Component } from "react";
import "../stylesheets/styles.css";
import { Link } from "react-router-dom";
import HomeNav from "./homeNav";
class StudentPage extends React.Component {
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
                    width="100%"
                    src="https://www.employerlive.com/blogimgs/Online-courses_blog10.jpg"
                    alt="courses"
                  />
                </div>
                <div className="back from-left">
                  <h2 className="text-black">All Courses</h2>
                  <h3 className="text-black">Courses instructed by Admin</h3>
                  <h3 className="text-black">See also</h3>
                </div>
              </div>
            </Link>
            <div className="card mb-4">
              <div className="content">
                <div className="front">
                  <img
                    className="profile"
                    width="100%"
                    src="https://images.hindustantimes.com/img/2021/09/07/550x309/results_222603a6-641a-11e8-b4a9-2154dcd09999_1631012392715.jpg"
                    alt="courses"
                  />
                </div>
                <div className="back from-left">
                  <h2>Results</h2>
                  <h3>Check your results</h3>
                  <h3>See also</h3>
                </div>
              </div>
            </div>
            <div className="card mb-4">
              <div className="content">
                <div className="front">
                  <img
                    className="profile"
                    width="100%"
                    src="https://pioneer.occc.edu/wp-content/uploads/2021/02/StudentEnrollment-300x174.png"
                    alt="courses"
                  />
                </div>
                <div className="back from-left">
                  <h2>De Enrollment</h2>
                  <h3>You can De Enroll Now</h3>
                  <h3>See also</h3>
                </div>
              </div>
            </div>
            <div className="card card3 mb-4">
              <div className="content">
                <div className="front">
                  <img
                    className="profile profile1"
                    width="100%"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkjtJtc70XGs5oLNMzuNPUh6tB4eTZRP4gHQ&usqp=CAU"
                    alt="courses"
                  />
                </div>
                <div className="back from-left">
                  <h2>Update Student Details</h2>
                  <h3>You can update your details</h3>
                  <h3>See also</h3>
                </div>
              </div>
            </div>
            <Link
              className="card card4 mb-4"
              to="/studentPage/studentGetAllExams"
            >
              <div className="content">
                <div className="front">
                  <img
                    className="profile profile2"
                    width="100%"
                    src="https://imgk.timesnownews.com/story/Exam_Date_53.jpg?tr=w-400,h-300,fo-auto"
                    alt="courses"
                  />
                </div>
                <div className="back from-left">
                  <h2>Exam</h2>
                  <h3>Check For Your Exam Details</h3>
                  <h3>See also</h3>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default StudentPage;
