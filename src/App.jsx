import { Routes, Route } from "react-router-dom";

import Header from "./components/header/header.component";
import Credentials from "./pages/credintials/credintials.components";
import Grades from "./pages/grades/grades.component";
import NotAllowed from "./pages/not-allowed/not-allowed.component";
import "./App.css"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Credentials />} />
          <Route path="grades" element={<Grades />}/>
          <Route  path="not-allowed" element={<NotAllowed />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
