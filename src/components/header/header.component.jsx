import React, { Fragment } from "react";

import "./header.styles.css";
import { Link, Outlet } from "react-router-dom";

function Header() {
  return (
    <Fragment>
      <header className="card">
        <h1>نتيجة بنات اعدادي</h1>
      </header>
      <Outlet />
    </Fragment>
  );
}

export default Header;
