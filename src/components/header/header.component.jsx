import React, { Fragment } from "react";

import "./header.styles.css";
import { Link, Outlet } from "react-router-dom";

function Header() {
  return (
    <Fragment>
      <header className="card">
        <h1>نتيجة بنات اعدادي</h1>
        <Link to="/">Credintials</Link>
        <Link to="/grades"> Grades</Link>
        <Link to="/not-allowed">Not Allowed</Link>
      </header>
      <Outlet />
    </Fragment>
  );
}

export default Header;
