import React from "react";
import "./credintials.styles.css";

function Credentials() {
  return (
    <form className="credintials-form card">
      <input
        type="text"
        id="name"
        placeholder="ادخل الاسم كاملا كما في البطاقة"
        className="card"
      />
      <input
        type="number"
        id="seat"
        placeholder="رقم الجلوس"
        className="card"
      />
      <button type="submit">ابحث</button>
    </form>
  );
}

export default Credentials;
