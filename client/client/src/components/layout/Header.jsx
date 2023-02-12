import React from "react";
import Header2 from "./Header2";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div>
      <Header2 appName={props.appName}></Header2>
      <nav class="navbar bg-dark">
        <h1>
          <Link to="/index.html">
            <i class="fas fa-code"></i>
            {props.appName}
          </Link>
        </h1>
        <ul>
          <li>
            <a href="profiles.html">Developers</a>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login.html">SignIn</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
