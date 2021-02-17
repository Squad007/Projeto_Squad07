import React, { useState, useEffect } from "react";

import "./med.css";
import formatDate from "../../Assets/functions/formatDate";

export default function Medicamentos() {
  const [medic, setMedic] = useState([]);
  const [formData, setFormData] = useState({
    id: "",
    nome: "",
    observacao: "",
    cadastrado_por_id: "",
  });

  // ------------------------------ Postagens form register
  const sendForm = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3001/med", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      }).then((dados) => {
        setFormData({
          id: "",
          nome: "",
          observacao: "",
          cadastrado_por_id: "",
        });
      });
    } catch (err) {
      alert("Erro: mensagem não cadastrada, tente mais tarde!");
    }
  };

  const onChangeInput = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // ----------------------------- Api medicamentos
  useEffect(() => {
    async function fetchMyAPI() {
      const response = await fetch("http://localhost:3001/med/DENcount");
      setMedic(await response.json());
    }
    fetchMyAPI();
  }, []);

  return (
    <>
      <div class="MED jumbotron card card-image text-white bg-transparent ">
        <p class="text-center">Bem vindo ao sistema SOS, -</p>
        <h1 class="display-4 text-success  font-weight-bold">Medicamentos</h1>

        <button
          type="button"
          class="btn btn-success btn-lg font-weight-bold"
          data-toggle="modal"
          data-target="#cadastroMEDModal"
        >
          CADASTRAR NOVO MEDICAMENTO
        </button>

        <hr class="my-4 bg-white" />
        <p class="lead font-weight-bold">Atualmente cadastrados:</p>
        <div class="table-responsive">
          <table class="table table-striped table-hover table-dark bg-dark text-center">
            <thead>
              <tr>
                <th scope="col" class=" text-left">
                  ID
                </th>
                <th scope="col" class=" text-left">
                  NOME
                </th>
                <th scope="col" class=" text-center">
                  N°_NOTIFICAÇÕES
                </th>
              </tr>
            </thead>
            <tbody>
              {medic.map((med) => (
                
                <tr>
                  <th class="align-middle text-left" scope="row ">
                    {med.id}
                  </th>
                  <td class="align-middle text-left">
                    <details>
                      <summary class="font-weight-bold">{med.nome}</summary>
                      <section>
                        <hr class="border border-white bg-white mx-0 my-2 p-0" />

                        <div>
                          <b class="text-success">Cadastrado por: </b>
                          {med.cadastrado_por_id}
                        </div>

                        <div>
                          <b class="text-success">Cadastrado em: </b>
                          {formatDate(med.data_cadastro)}
                        </div>

                        <hr class="border border-white bg-white mx-0 my-2 p-0" />
                      </section>
                    </details>
                  </td>
                  <td class="align-middle text-center">{med.qtde}</td>
                  <td class="align-middle text-right">
                    <div class="btn-group">
                      {/* <!-- Modal Atualizar medicamentos --> */}
                      <button
                        class="btn btn-outline-info font-weight-bold"
                        data-toggle="modal"
                        data-target={"#atualizarMEDModal"+(med.id)}
                      >
                        EDITAR
                      </button>
                      <div
                        class="modal fade text-dark"
                        id={"atualizarMEDModal"+(med.id)}
                        data-backdrop="static"
                        data-keyboard="false"
                        tabindex="-1"
                        aria-labelledby="staticBackdropLabel"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="staticBackdropLabel">
                                ATUALIZAR MEDICAMENTO
                              </h5>
                              <button
                                type="button"
                                class="close"
                                data-dismiss="modal"
                                aria-label="Close"
                              >
                                <span aria-hidden="true">&times;</span>
                              </button>
                            </div>

                            <div class="modal-body">
                              <form
                                id={"atualizarMED"+(med.id)}
                                class="container-fluid"
                                method="post"
                                name="form"
                              >
                                <div class="row">
                                  <div class=" col-sm-5 form-group">
                                    <label class="col-form-label">
                                      CADASTRADO POR:
                                    </label>
                                    <select
                                      class="custom-select mr-sm-2 border border-primary"
                                      name="cadastrado_por_id"
                                    >
                                      <option
                                        selected
                                        value={med.cadastrado_por_id}
                                      >
                                        {med.cadastrado_por_id}
                                      </option>
                                    </select>
                                  </div>
                                </div>

                                <div class="form-group">
                                  <label class="col-form-label">ID:</label>
                                  <input
                                    type="text"
                                    name="id"
                                    class="form-control border border-primary"
                                    value={med.id}
                                  />
                                </div>

                                <div class="form-group">
                                  <label class="col-form-label">
                                    DESCRIÇÃO COMPLETA:
                                  </label>
                                  <textarea
                                    class="form-control border border-primary"
                                    name="nome"
                                  >
                                    {med.nome}
                                  </textarea>
                                </div>

                                <div class="form-group">
                                  <label class="col-form-label">
                                    Observações extras sobre o medicamento a ser
                                    cadastrado:
                                  </label>
                                  <textarea
                                    class="form-control border border-primary"
                                    name="observacao"
                                  >
                                    {med.observacao}
                                  </textarea>
                                </div>
                              </form>
                            </div>

                            <div class="modal-footer d-flex justify-content-between align-items-center">
                              <button
                                type="button"
                                class="btn btn-secondary"
                                data-dismiss="modal"
                              >
                                SAIR
                              </button>

                              <div class="d-flex">
                                <input
                                  type="reset"
                                  class="btn btn-outline-warning mx-2"
                                  form="cadastrarMED"
                                  value="LIMPAR"
                                />
                                <input
                                  name="submit"
                                  type="submit"
                                  class="btn btn-primary mx-2"
                                  form="atualizarMED"
                                  value="ATUALIZAR"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <form method="post">
                        <input type="hidden" name="id" value={med.id} />

                        <button
                          type="submit"
                          class="btn btn-outline-danger  font-weight-bold"
                        >
                          <input type="hidden" name="excluir" />
                          APAGAR{" "}
                        </button>
                      </form>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div
        class="modal fade text-dark"
        id="cadastroMEDModal"
        data-backdrop="static"
        data-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">
                CADASTRAR MEDICAMENTO
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div class="modal-body">
              <form
                onSubmit={sendForm}
                id="cadastrarMED"
                class="container-fluid"
                method="post"
              >
                <div class="row">
                  <div class=" col-sm-5 form-group">
                    <label class="col-form-label">CADASTRADO POR:</label>
                    <select
                      class="custom-select mr-sm-2 border border-primary"
                      name="cadastrado_por_id"
                    >
                      <option selected></option>
                    </select>
                  </div>
                </div>

                <div class="form-group">
                  <label class="col-form-label">ID:</label>
                  <input
                    type="text"
                    name="id"
                    value={formData.id}
                    onChange={onChangeInput}
                    class="form-control border border-primary"
                    placeholder="Digite o ID oficial do medicamento"
                    required
                  />
                </div>

                <div class="form-group">
                  <label class="col-form-label">DESCRIÇÃO COMPLETA:</label>
                  <textarea
                    class="form-control border border-primary"
                    name="nome"
                    value={formData.nome}
                    onChange={onChangeInput}
                    placeholder="Digite o nome completo do medicamento"
                    required
                  ></textarea>
                </div>

                <div class="form-group">
                  <label class="col-form-label">
                    Observações extras sobre o medicamento a ser cadastrado:
                  </label>
                  <textarea
                    class="form-control border border-primary"
                    name="observacao"
                    value={formData.observacao}
                    onChange={onChangeInput}
                    placeholder="Opcional"
                  ></textarea>
                </div>
              </form>
            </div>

            <div class="modal-footer d-flex justify-content-between align-items-center">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                SAIR
              </button>

              <div class="d-flex">
                <input
                  type="reset"
                  class="btn btn-outline-warning mx-2"
                  form="cadastrarMED"
                  value="LIMPAR"
                />
                <input
                  type="submit"
                  class="btn btn-primary mx-2"
                  form="cadastrarMED"
                  value="CADASTRAR"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
