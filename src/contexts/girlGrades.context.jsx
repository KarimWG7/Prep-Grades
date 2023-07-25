import { createContext, useState } from "react";

const defaultGrades = {
  girlGrades: {
    "رقم الجلوس": 0,
    "اسم الطالب": "",
    فقه: "",
    انجليزي: "",
    رياضيات: "",
    "فيزياء 1": "",
    "الهندسه الوصفيه": "",
    قران: "",
    "هندسة الانتاج": "",
    ميكانيكا: "",
    حاسب: "",
    عقيدة: "",
    تطور: "",
    "رسم هندسي": "",
    كيمياء: "",
    اختيارات: "",
  },
  setGirlsGrades: () => null,
};
export const girlGradesContext = createContext(defaultGrades);

export const GirlGradesProvider = ({ children }) => {
  const [girlGrades, setGirlsGrades] = useState(defaultGrades.girlGrades);
  const value = { girlGrades, setGirlsGrades };

  return (
    <girlGradesContext.Provider value={value}>
      {children}
    </girlGradesContext.Provider>
  );
};
