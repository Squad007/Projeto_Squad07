import React from "react";

export default function Report() {
  return (
    <main>
      {/* <!-------------------------------------- Formulario para Enviar Mensagem -------------------------> */}
      <div className="container my-3 p-3 bg-light rounded shadow-lg" id="demo-form">
        <form className="container" method="POST" action="contact.php">
          <div className="form-group">
            <h1 className="my-4">Enviar Mensagem</h1>
            <label for="nome">Nome</label>
            <input
              className="form-control mb-2"
              type="text"
              name="nome"
              placeholder="Digite seu Nome"
              required
            />

            <label for="nome">E-mail(opcional)</label>
            <input
              className="form-control mb-2"
              type="email"
              name="email"
              placeholder="Digite seu E-mail"
            />

            <label for="nome">Mensagem</label>
            <textarea
              className="form-control mb-2"
              name="msg"
              placeholder="Digite uma mensagem"
              required
            ></textarea>

            <button
              type="button"
              className="btn home-btn btn-primary"
              data-toggle="modal"
              data-target="#modalconfirma"
            >
              Enviar
            </button>

            {/* <!-------------------------------------- Modal de confirmação para mensagem -------------------> */}
            <div className="container">
              <div className="modal" id="modalconfirma" tabindex="-1" role="dialog">
                <div
                  className="modal-dialog modal-dialog-centered modal-sm"
                  role="document"
                >
                  <div className="modal-content">
                    <div className="modal-header">
                      <h4 className="modal-title">Confirma</h4>
                      <button type="button" className="closer" data-dismiss="modal">
                        <span> &times; </span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <p>Confirmar o envio da mensagem?</p>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="submit"
                        name="submit"
                        className="btn btn-success"
                      >
                        Ok
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger"
                        data-dismiss="modal"
                      >
                        Cancelar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}
