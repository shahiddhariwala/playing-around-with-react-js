import React, { Component } from "react";

import Courses from "./containers/Courses/Courses";
import Users from "./containers/Users/Users";
import {
  BrowserRouter,
  Route,
  Switch,
  NavLink,
  Redirect,
} from "react-router-dom";
import NoMatch from "./components/NoMatch/NoMatch";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ol style={{ textAlign: "left" }}>
          <li>
            <del>
              {" "}
              Add Routes to load "Users" and "Courses" on different pages (by
              entering a URL, without Links){" "}
            </del>
          </li>
          <li>
            <del>
              Add a simple navigation with two links => One leading to "Users",
              one leading to "Courses"
            </del>
          </li>
          <li>
            <del>
              Make the courses in "Courses" clickable by adding a link and load
              the "Course" component in the place of "Courses" (without passing
              any data for now)
            </del>
          </li>
          <li>
            <del>
              Pass the course ID to the "Course" page and output it there
            </del>
          </li>
          <li>
            <del>
              Pass the course title to the "Course" page - pass it as a param or
              score bonus points by passing it as query params (you need to
              manually parse them though!)
            </del>
          </li>
          <li>
            <del>
              Load the "Course" component as a nested component of "Courses"
            </del>
          </li>
          <li>
            <del>Add a 404 error page and render it for any unknown routes</del>
          </li>
          <li>
            <del>
              Redirect requests to /all-courses to /courses (=> Your "Courses"
              page)
            </del>
          </li>
        </ol>

        <BrowserRouter>
          <div>
            <nav>
              <ul style={{ listStyle: "none", padding: "0px" }}>
                <li style={{ display: "inline-block", margin: "10px" }}>
                  <NavLink to="/users">Users Page</NavLink>
                </li>
                <li style={{ display: "inline-block", margin: "10px" }}>
                  <NavLink to="/courses">Courses Page</NavLink>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route path="/users" component={Users} />

              <Route path="/courses" component={Courses} />

              <Redirect from="/all-courses" to="/courses" />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
