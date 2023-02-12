import React from "react";

const Footer = (props) => {
  return (
    <>
      <h5>
        &copy;www.knowledgehut.com {props.appName}
        {new Date().getFullYear()}
      </h5>
    </>
  );
};

export default Footer;
