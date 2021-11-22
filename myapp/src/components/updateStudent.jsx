import React, { Component } from "react";
import axios from "axios";

class UpdateStudent extends React.Component {
  state = {
    course: {
      courseId: 0,
      courseName: "",
      courseType: "",
      description: "",
    },
  };

  componentDidMount() {
    axios
      .get(
        `http://localhost:8080/admin/findCoursesById/${this.props.match.params.courseId}`
      )
      .then((res) => {
        const stu = { ...this.state.course };
        stu.courseId = res.data.courseId;
        stu.courseName = res.data.courseName;
        stu.courseType = res.data.courseType;
        stu.description = res.data.description;
        console.log(res.data);
        console.log(stu);
        this.setState({ course: stu });
      })
      .catch((err) => console.log(err));
  }
  handleChange = (event) => {
    const student = { ...this.state.course };
    student[event.target.name] = event.target.value;
    console.log(event.target.name);
    console.log(event.target.value);
    this.setState({ course: student });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    const student = {
      courseId: this.props.match.params.courseId,
      courseName: this.state.course.courseName,
      courseType: this.state.course.courseType,
      description: this.state.course.description,
    };
    axios
      .put("http://localhost:8080/admin/updateCourse", student)
      .then((res) => {
        this.props.history.push("/student");
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <h3 className="text-center">Update course</h3>
        <form onSubmit={this.handleSubmit} className="w-50 mx-auto border p-3">
          <div className="mb-3">
            <label for="exampleInputName" className="form-label">
              course Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputName"
              value={this.state.course.courseName}
              name="courseName"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputContactNo" className="form-label">
              course type
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputContactNo"
              aria-describedby="emailHelp"
              value={this.state.course.courseType}
              name="courseType"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputContactNo" className="form-label">
              description
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputContactNo"
              aria-describedby="emailHelp"
              value={this.state.course.description}
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

export default UpdateStudent;
