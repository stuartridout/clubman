import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function header() {
  return (
    <div className="header__navTop">
      <Link to="/">
        <img className="header__clubLogo" src="./images/mkcfcwhite.png" />
      </Link>
    </div>
  );
}

export default header;
