import React from 'react';
import { useNavigate } from 'react-router-dom';
export default function Menu() {
  const navigate = useNavigate();
  return (
    <div>
      <header>
        <nav
          className="navbar navbar-expand-lg navbar-dark shadow"
          style={{
            background: '#00b9b3',
            textTransform: 'uppercase',
            fontSize: '15px',
            fontWeight: 'bold',
          }}
        >
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
              style={{ background: '#6f42c1' }}
              type="button"
              data-toggle="collapse"
              data-target="#collapseNavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse w-75 " id="collapseNavbar">
              <ul
                className="nav w-100 d-flex justify-content-between flex-column flex-sm-row"
                style={{ listStyle: 'none' }}
              >
                <li className="nav-item">
                  <a
                    className="nav-link"
                    style={{ color: '#ffffff' }}
                    onClick={() => navigate('/notification')}
                  >
                    Notifi
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link"
                    style={{ color: '#ffffff' }}
                    onClick={() => navigate('/register')}
                  >
                    Register
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link"
                    style={{ color: '#ffffff' }}
                    onClick={() => navigate('/report')}
                  >
                    Report
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
