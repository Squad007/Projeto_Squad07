import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import './med.css';
import formatDate from '../../Assets/functions/formatDate';

export default function Medicamentos() {
  const [medic, setMedic] = useState([]);
  const [totalPages, setTotalPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [modifyCount, setModifyCount] = useState(0);
  const [searchInput, setSearchInput] = useState('');
  const [searchMode, setSearchMode] = useState(false);
  const [formData, setFormData] = useState({
    id: '',
    nome: '',
    observacao: '',
    cadastrado_por_id: '',
  });

  const credentials = useSelector((state) => state.credentials);

  // ----------------------------- Total pages
  useEffect(() => {
    async function fetchMyAPI() {
      const response = await fetch('http://localhost:3001/med/totalPages');
      const total = (await response.json())[0].qty;
      const array = [];

      for (let i = 1; i <= total; i++) {
        array.push(i);
        setTotalPages(array);
      }
    }
    fetchMyAPI();
  }, []);

  //////////////////////////////////  Cadastro medicamentos
  const sendForm = async (e) => {
    e.preventDefault();
    // console.log(formData);
    try {
      const res = await fetch('http://localhost:3001/med', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: { 'Content-Type': 'application/json' },
      });

      alert('Cadastrado com sucesso');
      setModifyCount(modifyCount + 1);

      setFormData({
        id: '',
        nome: '',
        observacao: '',
        cadastrado_por_id: credentials.username,
      });
    } catch (err) {
      alert('Erro: mensagem não cadastrada, tente mais tarde!');
    }
  };

  const onChangeInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // console.log(formData);
  };

  //////////////////////////////////  Atualizar medicamento

  const updateForm = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const res = await fetch('http://localhost:3001/med', {
        method: 'PUT',
        body: JSON.stringify(formData),
        headers: { 'Content-Type': 'application/json' },
      });

      alert('Atualizado com sucesso');
      setModifyCount(modifyCount + 1);
    } catch (err) {
      alert('Erro: UBS não atualizada, tente mais tarde!');
    }
  };

  //////////////////////////////////  Delete
  async function delForm(e) {
    let id = e;
    console.log(e);
    try {
      const res = await fetch(`http://localhost:3001/med/${id}`, {
        method: 'delete',
      });
      alert('Medicamento apagado!');
    } catch (err) {
      alert('Erro: mensagem não cadastrada, tente mais tarde!');
    }
  }

  ////////////////////////////////// Api medicamentos

  async function fetchMyAPI() {
    const response = await fetch(
      `http://localhost:3001/med/page/${currentPage}`
    );
    setMedic(await response.json());
  }

  useEffect(() => {
    fetchMyAPI();
  }, [currentPage, modifyCount]);

  const handleSearch = async () => {
    setSearchMode(true);
    const response = await fetch(
      `http://localhost:3001/med/search/${searchInput}`
    );
    setMedic(await response.json());
  };

  return (
    <>
      <div class="MED jumbotron card card-image text-white bg-transparent pb-4">
        <p class="text-center">
          Bem vindo ao sistema SOS, <b>{credentials.nome}</b>! - (
          {credentials.email})
        </p>
        <h1
          class="display-4 text-success  font-weight-bold"
          style={{
            fontSize: 'clamp(35px, 25px + 3vw, 55px)',
          }}
        >
          Medicamentos
        </h1>

        <button
          type="button"
          class="btn btn-success btn-lg font-weight-bold"
          data-toggle="modal"
          data-target="#cadastroMEDModal"
          style={{
            fontSize: 'clamp(9px, 5px + 2vw, 20px)',
          }}
          onClick={() => {
            setFormData({
              id: '',
              nome: '',
              observacao: '',
              cadastrado_por_id: credentials.username,
            });
          }}
        >
          CADASTRAR NOVO MEDICAMENTO
        </button>

        <hr class="my-4 bg-white" />

        <div className="row">
          <div className="col-lg-8">
            {!searchMode && (
              <p class="lead font-weight-bold">
                Atualmente cadastrados (página {currentPage} de{' '}
                {totalPages.length}):
              </p>
            )}

            {searchMode && (
              <p class="lead font-weight-bold">
                Atualmente cadastrados (resultado da busca):
              </p>
            )}
          </div>

          <div className="form-group col-lg-4">
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyUp={(e) =>
                searchInput.length >= 3
                  ? e.key === 'Enter' && handleSearch(e)
                  : e.key === 'Enter' && alert('Insira no mínimo 3 caracteres')
              }
              className="form-control border border-primary"
              placeholder="Buscar por nome"
            />
          </div>
        </div>

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
            {medic.length == 0 && (
              <div className="p-4">
                <b style={{ fontSize: '20px' }}>
                  Nenhum medicamento foi encontrado!
                </b>
              </div>
            )}
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
                        data-target={'#atualizarMEDModal' + med.id}
                        onClick={() => {
                          setFormData({
                            id: med.id,
                            nome: med.nome,
                            observacao: med.observacao ? med.observacao : '',
                            cadastrado_por_id: credentials.username,
                          });
                        }}
                      >
                        EDITAR
                      </button>
                      <div
                        class="modal fade text-dark"
                        id={'atualizarMEDModal' + med.id}
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
                                id={'atualizarMED' + med.id}
                                class="container-fluid"
                                method="post"
                                name="form"
                                onSubmit={updateForm}
                              >
                                <div class="form-group">
                                  <label class="col-form-label">ID:</label>
                                  <input
                                    type="text"
                                    name="id"
                                    class="form-control border border-primary"
                                    value={formData.id}
                                    disabled
                                  />
                                </div>

                                <div class="form-group">
                                  <label class="col-form-label">
                                    DESCRIÇÃO COMPLETA:
                                  </label>
                                  <textarea
                                    class="form-control border border-primary"
                                    name="nome"
                                    onChange={onChangeInput}
                                    value={formData.nome}
                                  ></textarea>
                                </div>

                                <div class="form-group">
                                  <label class="col-form-label">
                                    Observações extras sobre o medicamento a ser
                                    cadastrado:
                                  </label>
                                  <textarea
                                    class="form-control border border-primary"
                                    name="observacao"
                                    onChange={onChangeInput}
                                    value={formData.observacao}
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
                                  name="submit"
                                  type="submit"
                                  class="btn btn-primary mx-2"
                                  form={'atualizarMED' + med.id}
                                  value="ATUALIZAR"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <button
                        type="button"
                        class="btn btn-outline-danger font-weight-bold"
                        onClick={() => {
                          setModifyCount(modifyCount + 1);
                          delForm(med.id);
                        }}
                      >
                        APAGAR
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {!searchMode && (
          <div class="btn-group pagination justify-content-center mt-3 pg">
            {currentPage <= 1 ? (
              <a class="btn btn-outline-light disabled pga">ANTERIOR</a>
            ) : (
              <a
                class="btn btn-outline-light pga" 
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                ANTERIOR
              </a>
            )}

            {totalPages.length > 0 &&
              totalPages.map((page, index) =>
                currentPage == page ? (
                  <a key={index} class="btn btn-outline-light active pga">
                    {page}
                  </a>
                ) : (
                  <a
                    key={index}
                    class="btn btn-outline-light pga"
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </a>
                )
              )}

            {currentPage >= totalPages.length ? (
              <a class="btn btn-outline-light disabled pga">PRÓXIMO</a>
            ) : (
              <a
                class="btn btn-outline-light pga"
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                PRÓXIMO
              </a>
            )}
          </div>
        )}
      </div>
      {/* Cadastrar novo medicamento */}
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
                    onChange={onChangeInput}
                    value={formData.nome}
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
                    onChange={onChangeInput}
                    value={formData.observacao}
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
                  onClick={() => {
                    setFormData({
                      id: '',
                      nome: '',
                      observacao: '',
                      cadastrado_por_id: credentials.username,
                    });
                  }}
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
