import axios from "axios";
import React, { Component } from "react";

class StudentForm extends React.Component {
  state = {
    course: {
      courseName: "",
      courseType: "",
      description: "",
    },
  };
  handleChange = (event) => {
    const stu = { ...this.state.course };
    stu[event.target.name] = event.target.value;
    console.log(event.target.name);
    console.log(event.target.value);
    this.setState({ course: stu });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Clicked");
    axios
      .post("http://localhost:8080/admin/addNewCourse", this.state.course)
      .then((res) => {
        this.props.history.push("/student");
      })
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <div>
        <h3 class="text-center">Register Form</h3>
        <form className="w-50 mx-auto border p-3" onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label for="exampleInputName" className="form-label">
              courseName
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputName"
              name="courseName"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputContactNo" className="form-label">
              CourseType
            </label>
            <input
              type="text"
              className="form-control"
              aria-describedby="emailHelp"
              name="courseType"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              description
            </label>
            <input
              type="text"
              className="form-control"
              aria-describedby="emailHelp"
              name="description"
              onChange={this.handleChange}
            />
          </div>

          <div class="d-grid gap-2">
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default StudentForm;
