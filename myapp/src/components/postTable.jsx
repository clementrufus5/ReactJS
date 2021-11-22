import React from "react";

const PostTable = (props) => {
  const { array } = props;
  return (
    <div>
      <table className="table table-hover table-dark table-striped w-75 mx-auto mt-5">
        <thead>
          <tr>
            <th class="w-25">User Id</th>
            <th>Id</th>
            <th>title</th>
            <th>body</th>
          </tr>
        </thead>
        <tbody>
          {array
            .filter((post) => post.id < 25 && post.userId === 1)
            .map((res) => (
              <tr>
                <td>{res.userId}</td>
                <td>{res.id}</td>
                <td>{res.title}</td>
                <td>{res.body}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default PostTable;
