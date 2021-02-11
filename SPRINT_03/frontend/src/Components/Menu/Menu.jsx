import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

export default function Menu() {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark shadow nav-style">
          <div class="container w-100">
            <Link to='/'>
              <img
                className="my-1"
                src={require('../../Assets/img/logo.svg').default}
                width="80px"
              />
            </Link>

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
                  <Link
                    className="nav-link"
                    to='/notification'
                  >
                    Notificações
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to='/register'
                  >
                    Registre 
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to='/report'
                  >
                    Relatórios 
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to='/contact'
                  >
                    Fale Conosco
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
