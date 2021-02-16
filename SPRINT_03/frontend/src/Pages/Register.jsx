import React, { useEffect, useState } from "react";
import "../Assets/css/register.css";

export default function Register() {
  const [ubsSelect, setUbsSelect] = useState([])

  // ------------------------------ Api ubs
  useEffect(() => {
    async function fetchMyAPI() {
      const response = await fetch("http://localhost:3001/ubs/dropdown");
      setUbsSelect(await response.json());
    }
    fetchMyAPI();
  }, []);

  return (
    <>
      <div class="main-not container p-3 bg-light rounded shadow-lg">
        <form>
          <div class="form-group">
            <h1 class="my-4">Cadastrar Notificação</h1>
            <label for="ubs_id">Escolha a UBS</label>
            <select name="ubs_id" class="form-control mb-3" required>
              <option value="0" required>
                Escolha a UBS
              </option>
              {/* Seleção da UBS */}

              {ubsSelect.map((ubs) => (
                <option value={ubs.id}>{ubs.nomeUbs}</option>
              ))}

            </select>
            <label for="medicamento_id">Medicamentos em falta</label>
            <select name="medicamento_id" class="form-control mb-3" required>
              <option value="0" required>
                Escolha o medicamento
              </option>
              {/* Seleção dos Medicamentos */}
            </select>
            <label for="data_denuncia">Data de quando faltou o remedio: </label>
            <input
              type="date"
              name="data_denuncia"
              class="form-control data mb-3"
              required
            />
            <label for="comentario">Observações e comentarios: </label>
            <textarea
              class="form-control mb-3"
              name="comentario"
              placeholder="Digite um comentario opcional"
            ></textarea>
            <button
              type="button"
              class="btn btn-primary"
              data-toggle="modal"
              data-target="#modalconfirma"
            >
              Enviar
            </button>

            {/* Modal de confirmação para cadastrar a notificação */}
            <div class="container">
              <div class="modal" id="modalconfirma" tabindex="-1" role="dialog">
                <div
                  class="modal-dialog modal-dialog-centered modal-sm"
                  role="document"
                >
                  <div class="modal-content">
                    <div class="modal-header">
                      <h4 class="modal-title">Confirma</h4>
                      <button type="button" class="closer" data-dismiss="modal">
                        <span> &times; </span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <p>Confirmar o envio da denúncia?</p>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="submit"
                        name="submit"
                        class="btn btn-success"
                      >
                        Ok
                      </button>
                      <button
                        type="button"
                        class="btn btn-danger"
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
