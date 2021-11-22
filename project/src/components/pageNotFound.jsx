import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/pagenotfound.css";
const PageNotFound = () => {
  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="error-template">
              <h1>Oops!</h1>
              <h1>404 Not Found</h1>
              <div class="error-details">
                Sorry, an error has occured, Requested page not found!
              </div>
              <div class="error-actions">
                <Link to="/" class="btn btn-primary btn-lg">
                  <span class="glyphicon glyphicon-home"></span>
                  Take Me Home
                </Link>
                <a
                  href="http://www.jquery2dotnet.com"
                  class="btn btn-default btn-lg"
                >
                  <span class="glyphicon glyphicon-envelope"></span> Contact
                  Support{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
