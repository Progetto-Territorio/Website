import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import WhatToLook from "./Pages/whatToLook";
import MonumentPage from "./Pages/MonumentPage";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/search" element={<WhatToLook />} />
        <Route exact path="/monument" element={<MonumentPage />} />
      </Routes>
    </>
  );
}

export default App;
