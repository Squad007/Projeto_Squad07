import React from 'react';
import { Link } from 'react-router-dom';

import './Menu.css';
import { FaEnvelopeOpenText, FaMapMarkedAlt, FaExclamationCircle,FaUsersCog } from "react-icons/fa";

import { HiDocumentSearch } from "react-icons/hi";

export default function Menu() {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark shadow nav-style">
          <div className="container w-100">
            <Link to='/'>
              <img
                className="my-1"
                src={require('../../Assets/img/logo.svg').default}
                width="80px"
                alt=""
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
                    to='/sobre'
                  >
                    <FaUsersCog />{" "}
                    Sobre
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to='/notification'
                  >
                    <FaMapMarkedAlt />{" "}
                    Notificações
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to='/register'
                  >
                    <FaExclamationCircle />{" "}
                    Notifique 
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to='/report'
                  >
                    <HiDocumentSearch />
                    Relatórios 
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to='/contact'
                  >
                    <FaEnvelopeOpenText />{" "}
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
