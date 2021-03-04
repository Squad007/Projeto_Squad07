import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import formatDate from '../../Assets/functions/formatDate';
import './ubs.css';

export default function Ubs() {
  const [ubs, setUbs] = useState([]);
  const [searchMode, setSearchMode] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [formData, setFormData] = useState({
    id: '',
    cadastrado_por_id: '',
    nomeUbs: '',
    descricao: '',
    endereco: '',
    bairro: '',
    distrito: '',
    zona: '',
    cidade: '',
    uf: '',
    cep: '',
    telefone: '',
    latitude: '',
    longitude: '',
  });

  const credentials = useSelector((state) => state.credentials);

  ////////////////////////////////////////// Cadastro Ubs
  const sendForm = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const res = await fetch('http://localhost:3001/ubs', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: { 'Content-Type': 'application/json' },
      });
      alert('Cadastrado com sucesso');

      setFormData({
        id: '',
        cadastrado_por_id: credentials.username,
        nomeUbs: '',
        descricao: '',
        endereco: '',
        bairro: '',
        distrito: '',
        zona: '',
        cidade: '',
        uf: '',
        cep: '',
        telefone: '',
        latitude: '',
        longitude: '',
      });
    } catch (err) {
      alert('Erro: mensagem não cadastrada, tente mais tarde!');
    }
  };

  ////////////////////////////////////////// Atualizar UBS

  const updateForm = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const res = await fetch('http://localhost:3001/ubs', {
        method: 'PUT',
        body: JSON.stringify(formData),
        headers: { 'Content-Type': 'application/json' },
      });

      alert('Atualizado com sucesso');
    } catch (err) {
      alert('Erro: UBS não atualizada, tente mais tarde!');
    }
  };

  ////////////////////////////////////////// Delete
  async function delForm(e) {
    let id = e;
    console.log(e);
    try {
      const res = await fetch(`http://localhost:3001/ubs/${id}`, {
        method: 'delete',
      });
    } catch (err) {
      alert('Erro: mensagem não cadastrada, tente mais tarde!');
    }
  }

  const onChangeInput = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  ////////////////////////////////////////// Api ubs
  useEffect(() => {
    async function fetchMyAPI() {
      const response = await fetch('http://localhost:3001/ubs/DENcount');
      setUbs(await response.json());
    }
    fetchMyAPI();
  }, []);


  const handleSearch = async () => {
    setSearchMode(true)
    const response = await fetch(
      `http://localhost:3001/ubs/search/${searchInput}`
    );
    setUbs(await response.json());
  };

  return (
    <>
      <div className="UBS jumbotron card card-image text-white bg-transparent h-100 ">
        <p className="text-center">
          Bem vindo ao sistema SOS, <b>{credentials.nome}</b>! - (
          {credentials.email})
        </p>
        <h1 className="display-4 text-warning  font-weight-bold">UBS's</h1>
        <button
          type="button"
          className="btn btn-warning btn-lg font-weight-bold"
          data-toggle="modal"
          data-target="#cadastroUBSModal"
          value={ubs.name}
          onClick={() => {
            setFormData({
              id: '',
              nomeUbs: '',
              cadastrado_por_id: credentials.username,
              descricao: '',
              endereco: '',
              bairro: '',
              distrito: '',
              zona: '',
              cidade: '',
              uf: '',
              cep: '',
              telefone: '',
              latitude: '',
              longitude: '',
            });
          }}
        >
          CADASTRAR NOVA UBS
        </button>
        
        <hr className="my-4 bg-white" />
        

        <div className="form-group">
        <div className="row">
        <div className="col-lg-8">
          <p>Atualmente cadastrados:</p>
          
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
              placeholder="Buscar por nome de UBS"
            />
            
          </div>
          </div>
          </div>
        <div className="table-responsive">
          <table className="table table-striped table-hover table-dark bg-dark text-center ">
            <thead>
              <tr>
                <th scope="col" onClick="ordenarID()">
                  ID
                </th>
                <th scope="col">NOME</th>
                <th scope="col">DISTRITO / ZONA</th>
                <th scope="col" onClick="ordenarQtde()">
                  N°_NOTIFICAÇÕES
                </th>
              </tr>
            </thead>
            {ubs.length == 0 && (
              <div className="p-4">
                <b style={{ fontSize: '20px' }}>
                  Nenhuma ubs encontrada!
                </b>
              </div>
            )}
            <tbody>
              {ubs.map((ubs) => (
                <tr>
                  <th className="align-middle text-left" scope="row ">
                    {ubs.id}
                  </th>
                  <td className="align-middle text-left">
                    <details>
                      <summary className="font-weight-bold">
                        {ubs.nomeUbs}
                      </summary>
                      <section>
                        <hr className="border border-white bg-white mx-0 my-2 p-0" />
                        <div>
                          <b className="text-warning">
                            Endereço: {ubs.endereco} {ubs.bairro}
                          </b>
                        </div>
                        <div>
                          <b className="text-warning">CEP: {ubs.cep} </b>
                        </div>
                        <div>
                          <b className="text-warning">
                            Telefone: {ubs.telefone}
                          </b>
                        </div>
                        <div>
                          <b className="text-warning">
                            Coordenada: {ubs.longitude}
                          </b>
                        </div>
                        <div>
                          <b className="text-warning">
                            Descricao: {ubs.descricao}
                          </b>
                        </div>
                        <hr className="border border-white bg-white mx-0 my-2 p-0" />
                        <div>
                          <b className="text-warning">
                            Cadastrado por: {ubs.cadastrado_por_id}
                          </b>
                        </div>
                        <div>
                          <b className="text-warning">
                            Cadastrado em: {formatDate(ubs.data_cadastro)}
                          </b>
                        </div>

                        <hr className="border border-white bg-white mx-0 my-2 p-0" />
                      </section>
                    </details>
                  </td>
                  <td className="align-middle text-left">
                    {ubs.distrito} / {ubs.zona}
                  </td>
                  <td className="align-middle text-center">{ubs.qtde}</td>
                  <td className="align-middle text-right">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-outline-info  font-weight-bold"
                        data-toggle="modal"
                        data-target={'#atualizarUBSModal' + ubs.id}
                        onClick={() => {
                          setFormData({
                            id: ubs.id,
                            cadastrado_por_id: credentials.username,
                            nomeUbs: ubs.nomeUbs,
                            descricao: ubs.descricao,
                            endereco: ubs.endereco,
                            bairro: ubs.bairro,
                            distrito: ubs.distrito,
                            zona: ubs.zona,
                            cidade: ubs.cidade,
                            uf: ubs.uf,
                            cep: ubs.cep,
                            telefone: ubs.telefone,
                            latitude: ubs.latitude,
                            longitude: ubs.longitude,
                          });
                        }}
                      >
                        EDITAR
                      </button>
                      {/* <!-- Modal para atualizar UBS --> */}
                      <div
                        className="modal fade text-dark"
                        id={'atualizarUBSModal' + ubs.id}
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
                                id={'atualizarUBS' + ubs.id}
                                className="container-fluid"
                                onSubmit={updateForm}
                              >
                                <input
                                  type="hidden"
                                  name="id"
                                  value={formData.id}
                                />

                                <div className="form-group">
                                  <input
                                    type="text"
                                    name="nomeUbs"
                                    className="form-control border border-primary"
                                    value={formData.nomeUbs}
                                    onChange={onChangeInput}
                                  />
                                </div>

                                <div className="form-group">
                                  <textarea
                                    className="form-control border border-primary"
                                    name="descricao"
                                    onChange={onChangeInput}
                                    value={formData.descricao}
                                    placeholder="Observações sobre a UBS"
                                    required
                                  ></textarea>
                                </div>

                                <div className="form-group">
                                  <input
                                    type="text"
                                    name="endereco"
                                    className="form-control border border-primary"
                                    value={formData.endereco}
                                    onChange={onChangeInput}
                                  />
                                </div>

                                <div className="row">
                                  <div className="form-group col-lg-8">
                                    <input
                                      type="text"
                                      name="bairro"
                                      className="form-control border border-primary"
                                      value={formData.bairro}
                                      onChange={onChangeInput}
                                    />
                                  </div>
                                </div>

                                <div className="row">
                                  <div className="col-lg-8 mr-auto form-group">
                                    <select
                                      className="custom-select mr-sm-2 border border-primary"
                                      name="distrito"
                                      value={formData.distrito}
                                    >
                                      <option selected>
                                        {formData.distrito}
                                      </option>
                                    </select>
                                  </div>

                                  <div className="col-4 col-lg-2 form-group">
                                    <select
                                      className="custom-select mr-sm-2 border border-primary"
                                      value={formData.zona}
                                      onChange={onChangeInput}
                                      name="zona"
                                    >
                                      <option value="ZN">ZN</option>
                                      <option value="ZS">ZS</option>
                                      <option value="ZO">ZO</option>
                                      <option value="ZL">ZL</option>
                                    </select>
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
                                      value={formData.uf}
                                    >
                                      <option selected>{formData.uf}</option>
                                    </select>
                                  </div>
                                </div>

                                <div className="row">
                                  <div className="col-7 col-md-6 mr-auto form-group">
                                    <input
                                      type="text"
                                      name="cep"
                                      value={formData.cep}
                                      onChange={onChangeInput}
                                      className="form-control border border-primary"
                                    />
                                  </div>

                                  <div className="col-7 col-md-6 form-group">
                                    <input
                                      type="text"
                                      name="telefone"
                                      value={formData.telefone}
                                      onChange={onChangeInput}
                                      className="form-control border border-primary"
                                    />
                                  </div>
                                </div>

                                <div className="row">
                                  <div className="col-7 col-md-6 mr-auto form-group">
                                    <input
                                      type="text"
                                      name="latitude"
                                      value={formData.latitude}
                                      onChange={onChangeInput}
                                      className="form-control border border-primary"
                                    />
                                  </div>

                                  <div className="col-7 col-md-6 form-group">
                                    <input
                                      type="text"
                                      name="longitude"
                                      value={formData.longitude}
                                      onChange={onChangeInput}
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
                                  type="submit"
                                  className="btn btn-primary mx-2"
                                  form={'atualizarUBS' + ubs.id}
                                  value="ATUALIZAR"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => delForm(ubs.id)}
                        className="btn btn-outline-danger font-weight-bold"
                      >
                        APAGAR{' '}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
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
                onSubmit={sendForm}
                id="cadastrarUBS"
                className="container-fluid"
                method="post"
              >
                <div className="form-group">
                  <input
                    type="text"
                    name="nomeUbs"
                    value={formData.nomeUbs}
                    onChange={onChangeInput}
                    className="form-control border border-primary"
                    placeholder="Nome da UBS"
                    required
                  />
                </div>

                <div className="form-group">
                  <textarea
                    className="form-control border border-primary"
                    name="descricao"
                    onChange={onChangeInput}
                    placeholder="Observações sobre a UBS"
                    value={formData.descricao}
                    required
                  ></textarea>
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    name="endereco"
                    value={formData.endereco}
                    onChange={onChangeInput}
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
                      value={formData.bairro}
                      onChange={onChangeInput}
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
                      value={formData.distrito}
                      onChange={onChangeInput}
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

                  <div className="col-4 col-lg-2 form-group">
                    <select
                      className="custom-select mr-sm-2 border border-primary"
                      value={formData.zona}
                      onChange={onChangeInput}
                      name="zona"
                    >
                      <option selected>Zona</option>
                      <option value="ZN">ZN</option>
                      <option value="ZS">ZS</option>
                      <option value="ZO">ZO</option>
                      <option value="ZL">ZL</option>
                    </select>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-8 mr-auto form-group">
                    <select
                      className="custom-select mr-sm-2 border border-primary"
                      name="cidade"
                      value={formData.cidade}
                      onChange={onChangeInput}
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
                      value={formData.uf}
                      onChange={onChangeInput}
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
                      value={formData.cep}
                      onChange={onChangeInput}
                      className="form-control border border-primary"
                      placeholder="CEP"
                      required
                    />
                  </div>

                  <div className="col-7 col-md-6 form-group">
                    <input
                      type="text"
                      name="telefone"
                      value={formData.telefone}
                      onChange={onChangeInput}
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
                      value={formData.latitude}
                      onChange={onChangeInput}
                      className="form-control border border-primary"
                      placeholder="Latitude (opcional)"
                    />
                  </div>

                  <div className="col-7 col-md-6 form-group">
                    <input
                      type="text"
                      name="longitude"
                      value={formData.longitude}
                      onChange={onChangeInput}
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
                  onClick={() => {
                    setFormData({
                      id: '',
                      cadastrado_por_id: credentials.username,
                      nomeUbs: '',
                      descricao: '',
                      endereco: '',
                      bairro: '',
                      distrito: '',
                      zona: '',
                      cidade: '',
                      uf: '',
                      cep: '',
                      telefone: '',
                      latitude: '',
                      longitude: '',
                    });
                  }}
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
