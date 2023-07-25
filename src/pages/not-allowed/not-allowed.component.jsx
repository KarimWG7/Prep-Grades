import React, { useContext } from "react";
import "./not-allowed.styles.css";

import { errorTextContext } from "../../contexts/error.context";

function NotAllowed() {
  const { errorText } = useContext(errorTextContext);

  return (
    <div className="not-allowed card">
      <h1>{errorText}</h1>
    </div>
  );
}

export default NotAllowed;
