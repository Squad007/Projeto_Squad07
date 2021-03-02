import React, { useState, useEffect } from 'react';

export default function Adms() {
  const [senhaConfirmada, setSenhaConfirmada] = useState('');
  const [adms, setAdms] = useState([]);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    senha: '',
    nome: '',
    imagem: '',
  });

  // ------------------------------ Cadastro form novos Adms
  const sendForm = async (e) => {
    e.preventDefault();
    if (senhaConfirmada === formData.senha) {
      try {
        const res = await fetch('http://localhost:3001/adm', {
          method: 'POST',
          body: JSON.stringify(formData),
          headers: { 'Content-Type': 'application/json' },
        }).then((dados) => {
          setFormData({
            username: '',
            email: '',
            senha: '',
            nome: '',
            imagem: '',
          });
          setSenhaConfirmada('');
        });
      } catch (err) {
        alert('Erro: mensagem não cadastrada, tente mais tarde!');
      }
    } else {
      alert('Senhas não iguais');
    }
  };

  const onChangeInput = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  //-------------------------------- Api adms
  useEffect(() => {
    async function fetchMyAPI() {
      const response = await fetch('http://localhost:3001/adm');
      setAdms(await response.json());
    }
    fetchMyAPI();
  }, [adms]);

  return (
    <div
      className="bg-transparent"
      style={{ minHeight: 'calc(100vh - 115px) ' }}
    >
      <main className="container">
        <section className="row">
          <div className="col mt-5">
            <div className="jumbotron card card-image text-white bg-transparent">
              <h1 className="display-4 text-light  font-weight-bold">ADM's</h1>
              <p className="lead font-weight-bold">
                Atuais ADM's do sistema SOS
              </p>

              <table className="table table-striped table-hover table-dark bg-dark text-center">
                <tbody>
                  {adms.map((adms) => (
                    <tr>
                      <th className="align-middle text-center" scope="row">
                        <img
                          src={adms.imagem}
                          width="45"
                          height="45"
                          className="d-inline-block align-top rounded-circle"
                          alt={adms.nome}
                          loading="lazy"
                        />
                      </th>

                      <td className="align-middle text-left">
                        <details>
                          <summary className="font-weight-bold">
                            {adms.nome}
                          </summary>
                          <section>
                            <div>
                              <b>Username: </b>
                              {adms.username}
                            </div>

                            <div>
                              <b>Email: </b>
                              {adms.email}
                            </div>

                            <div>
                              <b>Membro desde: </b>
                              {adms.adm_desde}
                            </div>
                          </section>
                        </details>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="col mt-5">
            <div className="jumbotron card card-image text-white bg-transparent">
              <h1 className="display-5 text-light  font-weight-bold">
                CADASTRAR
              </h1>
              <p className="lead font-weight-bold">
                Insira abaixo dados do novo ADM
              </p>

              <form
                onSubmit={sendForm}
                method="post"
                className="d-flex flex-column justify-content-center align-items-center "
              >
                <input
                  className="mb-3 form-control border border-light"
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={onChangeInput}
                  placeholder="Digite o nome"
                />
                <input
                  className="mb-3 form-control border border-light"
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={onChangeInput}
                  placeholder="Digite um nome de usuário"
                />
                <input
                  className="mb-3 form-control border border-light"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={onChangeInput}
                  placeholder="Digite o e-mail"
                />
                <input
                  className="mb-3 form-control border border-light"
                  type="url"
                  name="imagem"
                  value={formData.imagem}
                  onChange={onChangeInput}
                  placeholder="URL do avatar (opcional)"
                />
                <input
                  className="mb-3 form-control border border-light"
                  type="password"
                  name="senha"
                  value={formData.senha}
                  onChange={onChangeInput}
                  placeholder="Digite uma senha"
                />
                <input
                  className="mb-3 form-control border border-light"
                  type="password"
                  name="conf_senha"
                  placeholder="Confirme a senha"
                  value={senhaConfirmada}
                  onChange={(event) => setSenhaConfirmada(event.target.value)}
                />
                <div className="d-flex justify-content-between btn-block">
                  <button className="btn btn-outline-light" type="reset">
                    <b>Limpar</b>
                  </button>
                  <button className="btn btn-light botao" type="submit">
                    <b>Cadastrar</b>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <div id="displayInfo" className="fixed-top container"></div>
    </div>
  );
}
