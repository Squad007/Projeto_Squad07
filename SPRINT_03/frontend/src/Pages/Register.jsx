import React, { useEffect, useState } from "react";
import "../Assets/css/register.css";

export default function Register() {
  const [ubsSelect, setUbsSelect] = useState([]);
  const [medSelect, setMedSelect] = useState([]);
  const [formData, setFormData] = useState({
    ubs_id: "",
    medicamento_id: "",
    comentario: "",
    data_ocorrencia: "",
  });

  // ------------------------------ Postagens formulario
  const sendForm = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3001/den", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      }).then((dados) => {
        setFormData({
          ubs_id: "",
          medicamento_id: "",
          comentario: "",
          data_ocorrencia: "",
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

  // ------------------------------ Api ubs
  useEffect(() => {
    async function fetchMyAPI() {
      const response = await fetch("http://localhost:3001/ubs/dropdown");
      setUbsSelect(await response.json());
    }
    fetchMyAPI();
  }, []);

  //-------------------------------- api med
  useEffect(() => {
    async function fetchMyAPI() {
      const response = await fetch("http://localhost:3001/med/dropdown");
      setMedSelect(await response.json());
    }
    fetchMyAPI();
  }, []);

  return (
    <>
      <div className="main-not container p-3 bg-light rounded shadow-lg">
        <form onSubmit={sendForm} name="form" method="post">
          <div className="form-group">
            <h1 className="my-4">Cadastrar Notificação</h1>
            <label for="ubs_id">Escolha a UBS</label>
            <select
              name="ubs_id"
              value={formData.ubs_id}
              onChange={onChangeInput}
              className="form-control mb-3"
              required
            >
              <option value="0" required>
                Escolha a UBS
              </option>
              {/* Seleção da UBS */}

              {ubsSelect.map((ubs) => (
                <option value={ubs.id}>{ubs.nomeUbs}</option>
              ))}
            </select>
            <label for="medicamento_id">Medicamentos em falta</label>
            <select
              name="medicamento_id"
              value={formData.medicamento_id}
              onChange={onChangeInput}
              className="form-control mb-3"
              required
            >
              <option value="0" required>
                Escolha o medicamento
              </option>
              {/* Seleção dos Medicamentos */}

              {medSelect.map((med) => (
                <option value={med.id}>{med.nome}</option>
              ))}
            </select>
            <label for="data_ocorrencia">
              Data de quando faltou o remedio:{" "}
            </label>
            <input
              name="data_ocorrencia"
              value={formData.data_ocorrencia}
              onChange={onChangeInput}
              type="date"
              className="form-control data mb-3"
              required
            />
            <label for="comentario">Observações e comentarios: </label>
            <textarea
              name="comentario"
              value={formData.comentario}
              onChange={onChangeInput}
              className="form-control mb-3"
              placeholder="Digite um comentario opcional"
            ></textarea>
            <button
              type="button"
              className="btn btn-primary"
              data-toggle="modal"
              data-target="#modalconfirma"
            >
              Enviar
            </button>

            {/* Modal de confirmação para cadastrar a notificação */}
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
                      <p>Confirmar o envio da denúncia?</p>
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
    </>
  );
}
