import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import Menu from './Components/Menu/Menu';

function App() {
  return (
    <Router>
      <div className="App">
        <Menu />
        <Routes />
      </div>
    </Router>
  );
}

export default App;
