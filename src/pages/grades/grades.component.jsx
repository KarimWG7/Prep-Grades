import React from "react";
import Grade from "../../components/grade/grade.component";

import "./grades.styles.css";

const grades = {
  "رقم الجلوس": 1,
  "اسم الطالب": "كريم وحيد ابراهيم غانم",
  فقه: "ض",
  انجليزي: "ج",
  رياضيات: "ج ج",
  "فيزياء 1": "ج ج",
  "الهندسه الوصفيه": "ج",
  قران: "ج",
  "هندسة الانتاج": "ض",
  ميكانيكا: "ج",
  حاسب: "ض",
  عقيدة: "م",
  تطور: "ج",
  "رسم هندسي ": "ج",
  كيمياء: "م",
  اختيارات: "ا",
};
function Grades() {
  return (
    <section className="grades-container card">
      <div className="credits card">
        <h2 className="name">{grades["اسم الطالب"]}</h2>
        <p className="seat">{grades["رقم الجلوس"]}</p>
      </div>
      <div className="grades">
        {[...Object.keys(grades)].map((subject) => {
          if (
            subject === "رقم الجلوس" ||
            subject === "اسم الطالب" ||
            subject === "اختيارات"
          )
            return "";
          return <Grade key={subject} grades={grades} subject={subject} />;
        })}
      </div>
    </section>
  );
}

export default Grades;
