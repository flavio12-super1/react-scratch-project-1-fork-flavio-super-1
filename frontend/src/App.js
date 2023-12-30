import React from "react";
import { Routes, Route } from "react-router-dom";
import Map from "./components/Map";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<Map />} />
      </Routes>
    </div>
  );
}

export default App;
