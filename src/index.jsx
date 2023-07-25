import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

import { GirlGradesProvider } from "./contexts/girlGrades.context";
import App from './App';

import "./index.css";
import { ErrorTextProvider } from "./contexts/error.context";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GirlGradesProvider>
        <ErrorTextProvider>
          <App />
        </ErrorTextProvider>
      </GirlGradesProvider>
    </BrowserRouter>
  </React.StrictMode>
);

