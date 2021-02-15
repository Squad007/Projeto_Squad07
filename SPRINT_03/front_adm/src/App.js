import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import Rotas from './Routes';
import Menu from './Components/Menu/Menu';
import Footer from './Components/Footer/rodape';



function App() {
  return (
    <Router>
    <div className="App">
    <Menu />
      <Rotas />
      <Footer />
    </div>
  </Router>
  );
}

export default App;
