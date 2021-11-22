import React from "react";
import { Link } from "react-router-dom";

class HomeCards extends React.Component {
  render() {
    return (
      <div>
        <div class="row row-cols-1 row-cols-md-2 g-5 m-5 w-50 mx-auto">
          <Link
            class="col link text-decoration-none text-center text-black"
            to="/adminLogin"
          >
            <div class="card h-100 shadow pt-0 px-0 border border-secondary">
              <img
                src="https://images-platform.99static.com/kMoKZjRdwOlG2ppB6u0eeqE0L-4=/783x767:1504x1488/500x500/top/smart/99designs-contests-attachments/121/121158/attachment_121158757"
                class="card-img-top border border-secondary border-3"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title text-decoration-none">Admin</h5>
                <p class="card-text text-decoration-none">Admin login</p>
              </div>
            </div>
          </Link>
          <Link
            class="col link text-decoration-none text-center text-black "
            to="/studentLogin"
          >
            <div class="card h-100 shadow pt-0 px-0 border border-secondary">
              <img
                src="https://t4.ftcdn.net/jpg/03/20/44/79/360_F_320447925_eOwePRAva47K7lxcqoBvlNLmTM05GCXl.jpg"
                class="card-img-top border border-secondary border-3"
                alt="..."
              />
              <div class="card-body mt-5">
                <h5 class="card-title">Student</h5>
                <p class="card-text">Student login</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default HomeCards;
