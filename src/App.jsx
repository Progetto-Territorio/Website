import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import MonumentiMariani from "./Pages/MonumentiMariani";
import MonumentiPrato from "./Pages/MonumentiPrato";
import MonumentiPratoGenerici from "./Pages/MonumentiPratoGenerici";
import VideoAndBook from "./Pages/VideoAndBook";
import MonumentPage from "./Pages/SpecificPages/MonumentPage";
import MonumentPrato from "./Pages/SpecificPages/MonumentPrato";
import MonumentPratoGeneric from "./Pages/SpecificPages/MonumentPratoGeneric";
import ScrollToTop from "./Components/ScrollToTop";
import Navbar from "./Components/Navbar";
import Footer from "./Components/footer";

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/culto_mariano" element={<MonumentiMariani />} />
          <Route exact path="/monumenti_prato" element={<MonumentiPrato />} />
          <Route exact path="/monumenti" element={<MonumentiPratoGenerici />} />
          <Route exact path="/video_and_book" element={<VideoAndBook />} />
          <Route exact path="/culto_mariano/:name" element={<MonumentPage />} />
          <Route
            exact
            path="/monumenti_prato/:name"
            element={<MonumentPrato />}
          />
          <Route
            exact
            path="/monumenti/:name"
            element={<MonumentPratoGeneric />}
          />
        </Routes>
      </ScrollToTop>
      <Footer />
    </>
  );
}

export default App;
