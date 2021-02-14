import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Ubs from "./Pages/Ubs/Ubs";
import Medicamentos from "./Pages/Medicamentos/Medicamentos";
import Notificacaos from "./Pages/Notificacaos/Notificacaos";
import FaleConosco from "./Pages/FaleConosco/FaleConosco";
import Adms from "./Pages/Adms/Adms";

export default function Routs() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ubs" element={<Ubs />} />
      <Route path="/medicamentos" element={<Medicamentos />} />
      <Route path="/notificacao" element={<Notificacaos />} />
      <Route path="/faleConosco" element={<FaleConosco />} />
      <Route path="/adms" element={<Adms />} />
    </Routes>
  );
}
