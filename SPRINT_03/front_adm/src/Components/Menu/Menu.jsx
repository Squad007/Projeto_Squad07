import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

export default function Menu() {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow nav-style">
          <div className="container w-100">

          <div className="btn-group mr-5 ">
            <button
              className="btn btn-dark dropdown-toggle font-weight-bold d-flex align-items-center"
              data-toggle="dropdown-menu"
              aria-haspopup="true"
              aria-expanded="false"
            >
            <img
              src="https://avatars.githubusercontent.com/u/65695476?s=460&u=3d179b94c652bc8e71ef89e160bad45e23d80422&v=4"
              width="30"
              height="30"
              className="d-inline-block align-top rounded-circle"
              // alt="{/*<?php echo $_SESSION['nome'] ?>*/}"
              loading="lazy"
            />
              <span className="ml-2">{/*<?php echo $_SESSION['username'] ?>*/}Usuario</span>
            </button>

            <div className="dropdown-menu">
              <a className="dropdown-item font-weight-bold" href="#">Meu perfil</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item font-weight-bold" href="#">Sair</a>
            </div>
          </div>

            {/* <Link to='/'>
              <img
                className="my-1"
                src={require('../../Assets/img/logo.svg').default}
                width="80px"
              />
            </Link> */}

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
