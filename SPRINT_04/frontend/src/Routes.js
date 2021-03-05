import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Sobre from "./Pages/Sobre";
import Notification from "./Pages/Notification";
import Register from "./Pages/Register";
import Report from "./Pages/Report";
import Contact from "./Pages/Contact";
import Erro404 from "./Pages/Erro404";

export default function Eli() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/notification" element={<Notification />} />
      <Route path="/register" element={<Register />} />
      <Route path="/report" element={<Report />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/*" element={<Erro404 />} />
    </Routes>
  );
}
