import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Menu.css';
export default function Menu() {
  const navigate = useNavigate();
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark shadow nav-style">
          <div class="container w-100">
            <a onClick={() => navigate('/')}>
              <img
                className="my-1 "
                src={require('../../Assets/img/logo.svg').default}
                width="80px"
              />
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#collapseNavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse w-75 " id="collapseNavbar">
              <ul
                className="nav w-100 d-flex justify-content-between flex-column flex-sm-row"
              >
                <li className="nav-item">
                  <a
                    className="nav-link"
                    onClick={() => navigate('/notification')}
                  >
                    Notificações
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link"
                    onClick={() => navigate('/register')}
                  >
                    Registre 
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link"
                    onClick={() => navigate('/report')}
                  >
                    Relatórios 
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    onClick={() => navigate('/contact')}
                  >
                    Fale Conosco
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
