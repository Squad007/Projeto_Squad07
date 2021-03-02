import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeCredentials } from '../../redux/actions';
import Dropdown from 'react-bootstrap/Dropdown';
import './Menu.css';

export default function Menu() {
  const emptyCredentials = {
    username: null,
    nome: null,
    imagem: null,
    email: null,
    token: null,
  };

  const dispatch = useDispatch();
  const credentials = useSelector((state) => state.credentials);

  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow nav-style">
          <div className="container w-100">
            <Dropdown>
              <Dropdown.Toggle variant="dark" id="dropdown-basic">
                <img
                  src={credentials.imagem}
                  width="30"
                  height="30"
                  className="d-inline-block align-top rounded-circle"
                  alt={credentials.username}
                  loading="lazy"
                />
                <span className="ml-2">{credentials.username}</span>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>Meu perfil</Dropdown.Item>

                <Dropdown.Item
                  onClick={() => dispatch(changeCredentials(emptyCredentials))}
                >
                  SAIR
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#collapseNavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse w-75 " id="collapseNavbar">
              <ul className="nav w-100 d-flex justify-content-between flex-column flex-sm-row">
                <li className="nav-item">
                  <Link className="nav-link text-warning " to="/ubs">
                    UBS
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link text-success" to="/medicamentos">
                    Medicamentos
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link text-danger" to="/notificacao">
                    Notificações
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-primary" to="/faleConosco">
                    Fale Conosco
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/adms">
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
