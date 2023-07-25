import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Grade from "../../components/grade/grade.component";

import { girlGradesContext } from "../../contexts/girlGrades.context";

import "./grades.styles.css";

function Grades() {
  const { girlGrades, setGirlsGrades } = useContext(girlGradesContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("gotGrades")) navigate("/not-allowed");
    else {
      const grades = JSON.parse(localStorage.getItem("grades"));
      setGirlsGrades(grades);
    }
  }, [navigate]);
  return (
    <section className="grades-container card">
      <div className="credits card">
        <h2 className="name">{girlGrades["اسم الطالب"]}</h2>
        <p className="seat">{girlGrades["رقم الجلوس"]}</p>
      </div>
      <div className="grades">
        {[...Object.keys(girlGrades)].map((subject) => {
          if (
            subject === "رقم الجلوس" ||
            subject === "اسم الطالب" ||
            subject === "اختيارات"
          )
            return "";
          return <Grade key={subject} grades={girlGrades} subject={subject} />;
        })}
      </div>
    </section>
  );
}

export default Grades;
