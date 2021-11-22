import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import HomeNav from "./homeNav";
class StudentGetAllCourses extends React.Component {
  state = {
    courses: [],
  };
  componentDidMount() {
    axios
      .get("http://localhost:8080/student/getallCourses")
      .then((response) => {
        console.log(response);
        this.setState({ courses: response.data });
      })
      .catch((error) => console.log(error));
  }
  render() {
    return (
      <div>
        <HomeNav />
        <div className="container">
          <h1 className="display-6 text-center fw-bold text-dark mt-4 mb-4">
            Courses List
          </h1>
          <table className="table table-hover table-dark table-striped w-75 mx-auto mt-5">
            <thead>
              <tr>
                <th className="text-center">Course ID</th>
                <th className="text-center">CourseName</th>
                <th className="text-center">Course type</th>
                <th className="text-center">description</th>
              </tr>
            </thead>
            <tbody>
              {this.state.courses.map((course) => (
                <tr>
                  <td>{course.courseId}</td>
                  <td>{course.courseName}</td>
                  <td>{course.courseType}</td>
                  <td>{course.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default StudentGetAllCourses;
