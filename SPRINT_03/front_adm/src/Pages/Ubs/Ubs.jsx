import React from "react";

import './ubs.css'

export default function Ubs() {
  return (
    <>
      <div className="UBS jumbotron card card-image text-white bg-dark h-100 ">
        {/* style="background-color: rgba(0,0,0,0);" */}
        <p className="text-center">Bem vindo ao sistema SOS, - </p>
        <h1 className="display-4 text-warning  font-weight-bold">UBS's</h1>
        <button
          type="button"
          className="btn btn-warning btn-lg font-weight-bold"
          data-toggle="modal"
          data-target="#cadastroUBSModal"
        >
          CADASTRAR NOVA UBS
        </button>
        <hr className="my-4 bg-white" />
        <p className="lead font-weight-bold">Atualmente cadastradas:</p>
        <div className="table-responsive">
          <table className="table table-striped table-hover table-dark bg-dark text-center ">
            <thead>
              <tr>
                <th scope="col" onclick="ordenarID()">
                  ID
                </th>
                <th scope="col">NOME</th>
                <th scope="col">DISTRITO / ZONA</th>
                <th scope="col" onclick="ordenarQtde()">
                  N°_NOTIFICAÇÕES
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="align-middle text-left" scope="row "></th>
                <td className="align-middle text-left">
                  <details>
                    <summary className="font-weight-bold"></summary>
                    <section>
                      <hr className="border border-white bg-white mx-0 my-2 p-0" />
                      <div>
                        <b className="text-warning">Endereço: </b>
                      </div>
                      <div>
                        <b className="text-warning">CEP: </b>
                      </div>
                      <div>
                        <b className="text-warning">Telefone: </b>
                      </div>
                      <div>
                        <b className="text-warning">Coordenada: </b>
                      </div>
                      <div>
                        <b className="text-warning">Descricao: </b>
                      </div>
                      <hr className="border border-white bg-white mx-0 my-2 p-0" />
                      <div>
                        <b className="text-warning">Cadastrado por: </b>
                      </div>
                      <div>
                        <b className="text-warning">Cadastrado em: </b>
                      </div>

                      <hr className="border border-white bg-white mx-0 my-2 p-0" />
                    </section>
                  </details>
                </td>
                <td className="align-middle text-left"></td>
                <td className="align-middle text-center"></td>
                <td className="align-middle text-right">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-outline-info  font-weight-bold"
                      data-toggle="modal"
                      data-target="#atualizarUBSModal"
                    >
                      EDITAR
                    </button>

                    {/* <!-- Modal para atualizar UBS --> */}
                    <div
                      className="modal fade text-dark"
                      id="atualizarUBSModal"
                      data-backdrop="static"
                      data-keyboard="false"
                      tabindex="-1"
                      aria-labelledby="staticBackdropLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5
                              className="modal-title"
                              id="staticBackdropLabel"
                            >
                              ATUALIZAR UBS
                            </h5>
                            <button
                              type="button"
                              className="close"
                              data-dismiss="modal"
                              aria-label="Close"
                            >
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div className="modal-body">
                            <form
                              id="atualizarUBS"
                              className="container-fluid"
                              action="#"
                              method="post"
                            >
                              <input type="hidden" name="id" />
                              <div className="row">
                                <div className=" col-sm-5 form-group">
                                  <label className="col-form-label">
                                    Cadastrado por:
                                  </label>
                                  <select
                                    className="custom-select mr-sm-2 border border-primary"
                                    name="cadastrado_por_id"
                                  >
                                    <option selected></option>
                                  </select>
                                </div>
                              </div>

                              <div className="form-group">
                                <input
                                  type="text"
                                  name="nome"
                                  className="form-control border border-primary"
                                />
                              </div>

                              <div className="form-group">
                                <textarea
                                  className="form-control border border-primary"
                                  name="descricao"
                                ></textarea>
                              </div>

                              <div className="form-group">
                                <input
                                  type="text"
                                  name="endereco"
                                  className="form-control border border-primary"
                                />
                              </div>

                              <div className="row">
                                <div className="form-group col-lg-8">
                                  <input
                                    type="text"
                                    name="bairro"
                                    className="form-control border border-primary"
                                  />
                                </div>
                              </div>

                              <div className="row">
                                <div className="col-lg-8 mr-auto form-group">
                                  <select
                                    className="custom-select mr-sm-2 border border-primary"
                                    name="distrito"
                                  >
                                    <option selected></option>
                                  </select>
                                </div>

                                <div
                                  className=" col-lg-4 form-group btn-group btn-group-toggle d-flex justify-content-lg-end"
                                  data-toggle="buttons"
                                >
                                  <label className="btn btn-outline-primary">
                                    <input
                                      type="radio"
                                      name="zona"
                                      value="ZN"
                                    />{" "}
                                    ZN
                                  </label>
                                  <label className="btn btn-outline-primary active">
                                    <input
                                      type="radio"
                                      name="zona"
                                      value="ZL"
                                    />{" "}
                                    ZL
                                  </label>
                                  <label className="btn btn-outline-primary">
                                    <input
                                      type="radio"
                                      name="zona"
                                      value="ZS"
                                    />{" "}
                                    ZS
                                  </label>
                                  <label className="btn btn-outline-primary">
                                    <input
                                      type="radio"
                                      name="zona"
                                      value="ZO"
                                    />{" "}
                                    ZO
                                  </label>
                                </div>
                              </div>

                              <div className="row">
                                <div className="col-lg-8 mr-auto form-group">
                                  <select
                                    className="custom-select mr-sm-2 border border-primary"
                                    name="cidade"
                                  >
                                    <option selected value="SÃO PAULO">
                                      SÃO PAULO
                                    </option>
                                  </select>
                                </div>

                                <div className="col-4 col-lg-2 form-group">
                                  <select
                                    className="custom-select mr-sm-2 border border-primary"
                                    name="uf"
                                  >
                                    <option selected></option>
                                  </select>
                                </div>
                              </div>

                              <div className="row">
                                <div className="col-7 col-md-6 mr-auto form-group">
                                  <input
                                    type="text"
                                    name="cep"
                                    className="form-control border border-primary"
                                  />
                                </div>

                                <div className="col-7 col-md-6 form-group">
                                  <input
                                    type="text"
                                    name="telefone"
                                    className="form-control border border-primary"
                                  />
                                </div>
                              </div>

                              <div className="row">
                                <div className="col-7 col-md-6 mr-auto form-group">
                                  <input
                                    type="text"
                                    name="latitude"
                                    className="form-control border border-primary"
                                  />
                                </div>

                                <div className="col-7 col-md-6 form-group">
                                  <input
                                    type="text"
                                    name="longitude"
                                    className="form-control border border-primary"
                                  />
                                </div>
                              </div>
                            </form>
                          </div>

                          <div className="modal-footer d-flex justify-content-between align-items-center">
                            <button
                              type="button"
                              className="btn btn-secondary"
                              data-dismiss="modal"
                            >
                              SAIR
                            </button>

                            <div className="d-flex">
                              <input
                                type="reset"
                                className="btn btn-outline-warning mx-2"
                                value="LIMPAR"
                              />
                              <input
                                type="submit"
                                className="btn btn-primary mx-2"
                                value="ATUALIZAR"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <form method="post">
                      <input type="hidden" name="id" />

                      <button
                        type="submit"
                        className="btn btn-outline-danger  font-weight-bold"
                      >
                        <input type="hidden" name="excluir" />
                        APAGAR{" "}
                      </button>
                    </form>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* <!-- Modal para cadastro de UBS --> */}

      <div
        className="modal fade text-dark"
        id="cadastroUBSModal"
        data-backdrop="static"
        data-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                CADASTRAR UBS
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div className="modal-body">
              <form
                id="cadastrarUBS"
                className="container-fluid"
                action="#"
                method="post"
              >
                <div className="row">
                  <div className=" col-sm-5 form-group">
                    <label className="col-form-label">Cadastrado por:</label>
                    <select
                      className="custom-select mr-sm-2 border border-primary"
                      name="cadastrado_por_id"
                    >
                      <option selected></option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    name="nome"
                    className="form-control border border-primary"
                    placeholder="Nome da UBS"
                    required
                  />
                </div>

                <div className="form-group">
                  <textarea
                    className="form-control border border-primary"
                    name="descricao"
                    placeholder="Observações sobre a UBS"
                    required
                  ></textarea>
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    name="endereco"
                    className="form-control border border-primary"
                    placeholder="Endereço"
                    required
                  />
                </div>

                <div className="row">
                  <div className="form-group col-lg-8">
                    <input
                      type="text"
                      name="bairro"
                      className="form-control border border-primary"
                      placeholder="Bairro"
                      required
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-8 mr-auto form-group">
                    <select
                      className="custom-select mr-sm-2 border border-primary"
                      name="distrito"
                      required
                    >
                      <option selected>Escolha o distrito</option>
                      <option value="SÃO MIGUEL PAULISTA">
                        SÃO MIGUEL PAULISTA
                      </option>
                      <option value="VILA JACUÍ">VILA JACUÍ</option>
                      <option value="JARDIM HELENA">JARDIM HELENA</option>
                    </select>
                  </div>

                  <div
                    className=" col-lg-4 form-group btn-group btn-group-toggle d-flex justify-content-lg-end"
                    data-toggle="buttons"
                    required
                  >
                    <label className="btn btn-outline-primary">
                      <input type="radio" name="zona" value="ZN" /> ZN
                    </label>
                    <label className="btn btn-outline-primary">
                      <input type="radio" name="zona" value="ZL" /> ZL
                    </label>
                    <label className="btn btn-outline-primary">
                      <input type="radio" name="zona" value="ZS" /> ZS
                    </label>
                    <label className="btn btn-outline-primary">
                      <input type="radio" name="zona" value="ZO" /> ZO
                    </label>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-8 mr-auto form-group">
                    <select
                      className="custom-select mr-sm-2 border border-primary"
                      name="cidade"
                      required
                    >
                      <option selected>Escolha a cidade</option>
                      <option value="SÃO PAULO">SÃO PAULO</option>
                    </select>
                  </div>

                  <div className="col-4 col-lg-2 form-group">
                    <select
                      className="custom-select mr-sm-2 border border-primary"
                      name="uf"
                    >
                      <option selected>UF</option>
                      <option value="SP">SP</option>
                      <option value="RJ">RJ</option>
                    </select>
                  </div>
                </div>

                <div className="row">
                  <div className="col-7 col-md-6 mr-auto form-group">
                    <input
                      type="text"
                      name="cep"
                      className="form-control border border-primary"
                      placeholder="CEP"
                      required
                    />
                  </div>

                  <div className="col-7 col-md-6 form-group">
                    <input
                      type="text"
                      name="telefone"
                      className="form-control border border-primary"
                      placeholder="Telefone"
                      required
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-7 col-md-6 mr-auto form-group">
                    <input
                      type="text"
                      name="latitude"
                      className="form-control border border-primary"
                      placeholder="Latitude (opcional)"
                    />
                  </div>

                  <div className="col-7 col-md-6 form-group">
                    <input
                      type="text"
                      name="longitude"
                      className="form-control border border-primary"
                      placeholder="Longitude (opcional)"
                    />
                  </div>
                </div>
              </form>
            </div>

            <div className="modal-footer d-flex justify-content-between align-items-center">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                SAIR
              </button>

              <div className="d-flex">
                <input
                  type="reset"
                  className="btn btn-outline-warning mx-2"
                  form="cadastrarUBS"
                  value="LIMPAR"
                />
                <input
                  type="submit"
                  className="btn btn-primary mx-2"
                  form="cadastrarUBS"
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
