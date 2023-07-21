import { useRef } from "react";

import "./App.css";
import Header from "./components/header/header.component";

function App() {
  const getResults = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <div className="App">
      <Header />
      <form action="">
        <label htmlFor="#name">الاسم</label>
        <input type="text" id="name" />
        <label htmlFor="#name">رقم الجلوس</label>
        <input type="number" id="seat" />
        <button
          type="submit"
          onSubmit={(e) => {
            e.preventDefault();
            console.log(e.target);
          }}
        >
          getResults
        </button>
      </form>
    </div>
  );
}

export default App;
