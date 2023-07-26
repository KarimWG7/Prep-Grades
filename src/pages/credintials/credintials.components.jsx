import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getGirlDoc } from "../../utils/firebase/firebase.utils";

import { girlGradesContext } from "../../contexts/girlGrades.context";
import { errorTextContext } from "../../contexts/error.context";

import "./credintials.styles.css";

const defaultUser = {
  name: "",
  seatNum: "",
};

const compareNames = (name1, name2) => {
  if (name1 === name2.trim()) return true;
  const name1Arr = name1.split(" ");
  const name2Arr = name2.trim().split(" ");
  return name1Arr.includes(name2Arr[0] && name2Arr[1] && name2Arr.at(-1));
};

function Credentials() {
  const [user, setUser] = useState(defaultUser);
  const { seatNum, name } = user;
  const { setGirlsGrades } = useContext(girlGradesContext);
  const { setErrorText } = useContext(errorTextContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("gotGrades")) navigate("/grades");
  }, [navigate]);
  const resetFormFeilds = () => {
    setUser(defaultUser);
  };

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    // send data to server or database
    try {
      const grades = await getGirlDoc(user);
      if (grades.errorText) {
        setErrorText(grades.errorText);
        navigate("/not-allowed");
      } else {
        const name1 = grades["اسم الطالب"];
        const name2 = user.name;
        if (compareNames(name1, name2)) {
          setGirlsGrades(grades);
          navigate("/grades");
          localStorage.setItem("gotGrades", true);
          localStorage.setItem("grades", JSON.stringify(grades));
        } else {
          setErrorText("رقم الجلوس لا يتطابق مع رقم جلوس هذا الاسم");
          navigate("/not-allowed");
        }
      }
    } catch (err) {
      console.error(err.message);
    }
    resetFormFeilds();
  };

  return (
    <form className="credintials-form card" onSubmit={formSubmitHandler}>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="ادخل الاسم كاملا كما في البطاقة"
        className="card"
        value={name}
        required
        onChange={inputChangeHandler}
      />
      <input
        type="number"
        id="seat"
        name="seatNum"
        placeholder="رقم الجلوس"
        className="card"
        value={seatNum}
        required
        onChange={inputChangeHandler}
      />
      <button className="button" type="submit">
        ابحث
      </button>
    </form>
  );
}

export default Credentials;
