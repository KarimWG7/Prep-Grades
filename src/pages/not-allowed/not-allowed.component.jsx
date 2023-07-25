import React, { useContext } from "react";
import "./not-allowed.styles.css";

import { errorTextContext } from "../../contexts/error.context";
import { Link } from "react-router-dom";

function NotAllowed() {
  const { errorText } = useContext(errorTextContext);

  return (
    <div className="not-allowed card">
      <h1>{errorText}</h1>
      <Link to="/" className="card button">
        العودة
      </Link>
    </div>
  );
}

export default NotAllowed;
