import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Student extends React.Component {
  state = {
    students: [],
    course: {
      courseName: "",
      courseType: "",
      description: "",
    },
  };
  componentDidMount() {
    axios
      .get("http://localhost:8080/student/getallCourses")
      .then((response) => {
        console.log(response);
        this.setState({ students: response.data });
      })
      .catch((error) => console.log(error));
  }
  handleDelete = (id) => {
    axios
      .delete(`http://localhost:8080/admin/deleteCourse/${id}`)
      .then((res) => {
        const stu = this.state.students.filter((std) => std.courseId != id);
        this.setState({ students: stu });
      });
  };
  render() {
    return (
      <div className="container">
        <Link
          to="/students/add"
          className="btn btn-primary btn-large mb-1 float-end mt-4 "
        >
          Add
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th>Course ID</th>
              <th>CourseName</th>
              <th>Course type</th>
              <th>description</th>
              <th className="text-center" colSpan="2">
                Operations
              </th>
            </tr>
          </thead>
          <tbody>
            {this.state.students.map((student) => (
              <tr>
                <td>{student.courseId}</td>
                <td>{student.courseName}</td>
                <td>{student.courseType}</td>
                <td>{student.description}</td>
                <Link to={`/students/update/${student.courseId}`}>
                  <input
                    type="button"
                    value="update"
                    className="btn btn-success mt-2"
                  />
                </Link>

                <td>
                  <input
                    type="button"
                    value="delete"
                    className="btn btn-danger"
                    onClick={() => this.handleDelete(student.courseId)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Student;
