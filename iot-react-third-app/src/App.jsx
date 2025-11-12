import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageA from "./pages/PageA.jsx";
import PageB from "./pages/PageB.jsx";
import PageC from "./pages/PageC.jsx";
import PageD from "./pages/PageD.jsx";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageA />} />
          <Route path="/pageB" element={<PageB />} />
          <Route path="/pageC" element={<PageC />} />
          <Route path="/pageD" element={<PageD />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}