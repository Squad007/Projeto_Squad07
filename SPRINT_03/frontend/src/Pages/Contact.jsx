import React, { useState } from "react";

export default function Report() {
  const [formData, setFormData] = useState({
    nome: "",
    msg: "",
    email: "",
  });

  // ------------------------------ Postagens form contact
  const sendForm = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3001/msg", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      }).then((dados) => {
        setFormData({
          nome: "",
          msg: "",
          email: "",
        });
      });
    } catch (err) {
      // setMsg({
      //   formSave: false,
      //   type: "error",
      //   message: "Erro: mensagem não cadastrada, tente mais tarde!",
      // });
    }
  };

  const onChangeInput = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <main style={{minHeight: "calc(100vh - 68px - 56px )"}}>
      {/* <!-------------- Formulario para Enviar Mensagem -------------------------> */}
      <div
        className="container p-3 bg-light rounded shadow-lg"
        id="demo-form"
      >
        <form className="container" method="POST" onSubmit={sendForm}>
          <div className="form-group">
            <h1 className="my-4">Enviar Mensagem</h1>
            <label for="nome">Nome</label>
            <input
              className="form-control mb-2"
              type="text"
              name="nome"
              value={formData.nome}
              onChange={onChangeInput}
              placeholder="Digite seu Nome"
              required
            />

            <label for="nome">E-mail(opcional)</label>
            <input
              className="form-control mb-2"
              type="email"
              name="email"
              value={formData.email}
              onChange={onChangeInput}
              placeholder="Digite seu E-mail"
            />

            <label for="nome">Mensagem</label>
            <textarea
              className="form-control mb-2"
              name="msg"
              value={formData.msg}
              onChange={onChangeInput}
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
              <div
                className="modal"
                id="modalconfirma"
                tabindex="-1"
                role="dialog"
              >
                <div
                  className="modal-dialog modal-dialog-centered modal-sm"
                  role="document"
                >
                  <div className="modal-content">
                    <div className="modal-header">
                      <h4 className="modal-title">Confirma</h4>
                      <button
                        type="button"
                        className="closer"
                        data-dismiss="modal"
                      >
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
