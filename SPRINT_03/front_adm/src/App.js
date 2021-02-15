import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import Rotas from "./Routes";
import Menu from "./Components/Menu/Menu";
import Footer from "./Components/Footer/rodape";
import './Assets/css/global.css';

function App() {
  return (
    <Router>
      <Menu />
      <Rotas />
      <Footer />
    </Router>
  );
}

export default App;
