import React from "react";
import "./grade.styles.css";

function Grade({ grades, subject }) {
  return (
    <div className="grade card">
      <h2>{subject}</h2>
      <p>{grades[subject]}</p>
    </div>
  );
}

export default Grade;
