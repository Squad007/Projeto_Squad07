import React from "react";

export default function Register() {
  return (
    <>
      <div class="container my-3 p-3 bg-light rounded shadow-lg">
        <form>
          <div class="form-group">
            <h1 class="my-4">Cadastrar Denúncia</h1>
            <label for="ubs_id">Escolha a UBS</label>
            <select name="ubs_id" class="form-control mb-3" required>
              <option value="0" required>Escolha a UBS</option>
            </select>
            <label for="medicamento_id">Medicamentos em falta</label>
            <select name="medicamento_id" class="form-control mb-3" required>
              <option value="0" required>Escolha o medicamento</option>
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
            </button>{" "}
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
