import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import "tachyons";
import { WeatherPage, Main } from "./pages";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          {/*No need to add extra complexity level to urls if don't cover previous tree eg /weather, /weather/locations*/}
          <Route path="/:location" element={<WeatherPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
