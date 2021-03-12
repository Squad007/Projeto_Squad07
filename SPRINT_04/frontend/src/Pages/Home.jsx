import React from "react";
import { Link } from 'react-router-dom';
import "../Assets/css/home.css";

export default function Home() {
  return (
    <div style={{ minHeight: 'calc(100vh - 68px - 56px )' }}>
      <div className="jumbotron jumbotron-fluid text-sm-center bg-transparent">
        <div className="container">
          <div className="row">
            <div className="col-md-8 text-left info"
            style={{
              fontSize: "50px",
              fontFamily: "Bebas Neue"
            }}
            >
              <h1
              style={{
                fontSize: "60px",
                fontFamily: "Bebas Neue"
              }}
              >
                FALTOU MEDICAMENTO NA SUA UNIDADE BÁSICA DE SAÚDE(UBS)?
              </h1>
              <p>
                <Link
                  className="btn btn-roxo"
                  to="/register"
                  type="button"
                  style={{
                    fontSize: "37px",
                  }}
                >
                  NOTIFIQUE A FALTA <i className="fas fa-exclamation-circle"></i>
                </Link>
              </p>
            </div>
            <div className="col animate__animated animate__pulse animate__delay-1s">
              <img className="float-right" src="./img/pill.svg" alt="medicamento" />
            </div>
          </div>
        </div>
      </div>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-4 my-3">
              <div className="card mb-4 home_card h-100">
                <div className="card-body">
                  <h2 className="card-title">ULTIMAS NOTIFICAÇÕES</h2>
                  <p className="card-text home_card"
                  style={{
                    fontFamily: "Bree Serif",
                    fontSize: "24px"
                  }}
                  >
                    Veja as últimas notificações. O acesso à informação é um dos
                    dos direitos fundamentais garantido na nossa Constituição.
                  </p>
                </div>
                <div className="card-footer">
                  <Link
                    className="btn btn-roxo btn-block home-btn"
                    to="/notification"
                    type="button"
                  >
                    ACESSAR
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4 my-3">
              <div className="card mb-4 home_card h-100">
                <div className="card-body">
                  <h2 className="card-title">REGISTRE SUA NOTIFICAÇÃO</h2>
                  <p className="card-text home_card"
                  style={{
                    fontFamily: "Bree Serif",
                    fontSize: "24px"
                  }}
                  >
                    Notifique da falta de algum dos medicamento que deveria ser
                    fornecido pelo Sistema Único de Saúde.
                  </p>
                </div>
                <div className="card-footer">
                  <Link
                    className="btn btn-roxo btn-block home-btn"
                    to="/register"
                    type="button"
                  >
                    NOTIFICAR
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4 my-3">
              <div className="card mb-4 home_card h-100">
                <div className="card-body">
                  <h2 className="card-title">SOBRE NÓS</h2>
                  <p className="card-text home_card"
                  style={{
                    fontFamily: "Bree Serif",
                    fontSize: "24px"
                  }}
                  >
                    Somos o Squad 07 (SP1) da Recode Pro 2020. Estamos
                    trabalhando para desenvolver ferramentas que ajude a
                    comunidade.
                  </p>
                </div>
                <div className="card-footer">
                  <Link
                    className="btn btn-roxo btn-block home-btn"
                    to="/contact"
                    type="button"
                  >
                    CONTATO
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
