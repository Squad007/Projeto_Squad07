import React from "react";
import "../Assets/css/home.css";
export default function () {
  return (
    <div>
      {/* style="min-height: 68vh" */}

      <div className="jumbotron jumbotron-fluid text-sm-center bg-transparent">
        {" "}
        {/* style="background: rgba(253, 253, 253, 0);"*/}
        <div className="container">
          <div className="row">
            <div className="col text-left info">
              {" "}
              {/* style="font-family:; color:#00b9b3; text-align: left;" */}
              <h1>
                {" "}
                {/*style="line-height: 1.2; font-size: 50px;" */}
                FALTOU MEDICAMENTO NA SUA UNIDADE BÁSICA DE SAÚDE(UBS)?
              </h1>
              <p>
                <a
                  className="btn btn-roxo"
                  href="./register_notification.php"
                  type="button"
                >
                  {" "}
                  {/* style="background: #6f42c1; font-family: Bebas Neue;font-size: 25px; border: none;" */}
                  NOTIFIQUE A FALTA <i className="fas fa-exclamation-circle"></i>
                </a>
              </p>
            </div>
            <div className="col animate__animated animate__pulse animate__delay-1s">
              <img className="float-right" src="./img/pill.svg" alt="medicamento" />{" "}
              {/*style="max-width:310px; min-width: 150px;"  */}
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
                  <h4 className="card-title">ULTIMAS NOTIFICAÇÕES  </h4>{" "}
                  {/*style="color: #ffffff;font-family: Bebas Neue;font-size: 30px; line-height: 1.2;" */}
                  <p className="card-text">
                    {" "}
                    {/* style="color: #ffffff;font-size: 20px; margin-top: 10px; */}
                    Veja as últimas notificações. O acesso à informação é um dos
                    dos direitos fundamentais garantido na nossa Constituição.
                  </p>
                </div>
                <div className="card-footer">
                  <a
                    className="btn btn-roxo btn-block home-btn"
                    href="./notification.php"
                    type="button"
                  >
                    ACESSAR
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4 my-3">
              <div className="card mb-4 home_card h-100">
                <div className="card-body">
                  <h4 className="card-title">REGISTRE SUA NOTIFICAÇÃO</h4>{" "}
                  {/*style="color: #ffffff;font-family: Bebas Neue;font-size: 30px; line-height: 1.2;" */}
                  <p className="card-text">
                    {" "}
                    {/*style="color:#ffffff;font-size: 20px; margin-top: 10px;" */}
                    Notifique da falta de algum dos medicamento que deveria ser
                    fornecido pelo Sistema Único de Saúde.
                  </p>
                </div>
                <div className="card-footer">
                  <a
                    className="btn btn-roxo btn-block home-btn"
                    href="./register_notification.php"
                    type="button"
                  >
                    NOTIFICAR
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4 my-3">
              <div className="card mb-4 home_card h-100">
                <div className="card-body">
                  <h4 className="card-title">SOBRE NÓS</h4>{" "}
                  {/*style="color: #ffffff;font-family: Bebas Neue;font-size: 30px; line-height: 1.2;" */}
                  <p className="card-text">
                    {" "}
                    {/*style="color: #ffffff;font-size: 20px; margin-top: 10px;" */}
                    Somos o Squad 07 (SP1) da Recode Pro 2020. Estamos
                    trabalhando para desenvolver ferramentas que ajude a
                    comunidade.
                  </p>
                </div>
                <div className="card-footer">
                  <a
                    className="btn btn-roxo btn-block home-btn"
                    href="./contact.php"
                    type="button"
                  >
                    CONTATO
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
