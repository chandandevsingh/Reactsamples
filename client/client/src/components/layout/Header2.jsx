import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Header2 = (props) => {
  return (
    <div>
      Header2{props.appName}
      <div>Header3 appName={props.appName}</div>
    </div>
  );
};

Header2.propTypes = {};

export default Header2;
