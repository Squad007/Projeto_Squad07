import React from "react";
import { RiAdminFill } from "react-icons/ri";

import "./footer.css"

export default function rodape() {
  return (
    <footer className="footer mt-auto py-3 text-center">
      <div className="container">
        <b className="text-white">&copy; Squad 007 Recode Pro 2020 </b>
        <a href="https://sos-medicamentos-adm.herokuapp.com/"> <RiAdminFill style={{color: "#6f42c1", width: "30px", height: "22px"}}/></a>
      </div>
    </footer>
  );
};
