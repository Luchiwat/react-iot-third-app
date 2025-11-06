import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import pageA from "./pages/pageA.jsx";
import pageB from "./pages/pageB.jsx";
import pageC from "./pages/pageC.jsx";
import pageD from "./pages/pageD.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/pageA" element={<pageA />} />
        <Route path="/pageB" element={<pageB />} />
        <Route path="/pageC" element={<pageC />} />
        <Route path="/pageD" element={<pageD />} />
      </Routes>
    </BrowserRouter>
  );
}