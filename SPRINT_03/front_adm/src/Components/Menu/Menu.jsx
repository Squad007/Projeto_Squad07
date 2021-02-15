import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

export default function Menu() {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow nav-style">
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
                    className="nav-link text-warning "
                    to='/ubs'
                  >
                    UBS
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link text-success"
                    to='/medicamentos'
                  >
                    Medicamentos 
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link text-danger"
                    to='/notificacao'
                  >
                    Notificações 
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-primary"
                    to='/faleConosco'
                  >
                    Fale Conosco
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-white"
                    to='/adms'
                  >
                    Cadastrar novo ADM
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
