import React, { useState, useEffect } from 'react';
import './not.css';
import { useSelector } from 'react-redux';

import formatDate from '../../Assets/functions/formatDate';

export default function Notificacaos() {
  const [notific, setNotific] = useState([]);

  const credentials = useSelector((state) => state.credentials);

  // ------------------------------ Delete
  async function delForm(e) {
    // e.preventDefault();
    let id = e;
    try {
      const res = await fetch(`http://localhost:3001/den/${id}`, {
        method: 'delete',
      });
      console.log(res);
    } catch (err) {
      alert('Erro: mensagem não cadastrada, tente mais tarde!');
    }
  }

  // ----------------------------- Api notificações
  useEffect(() => {
    async function fetchMyAPI() {
      const response = await fetch('http://localhost:3001/den/forADM');
      setNotific(await response.json());
    }
    fetchMyAPI();
  }, [notific]);

  return (
    <div>
      <div className="NOT jumbotron card card-image bg-transparent  text-white">
        <p className="text-center">
          Bem vindo ao sistema SOS, <b>{credentials.nome}</b>! - (
          {credentials.email})
        </p>
        <h1
          className="display-4 text-danger  font-weight-bold"
          style={{
            fontSize: 'clamp(35px, 25px + 3vw, 55px)',
          }}
        >
          Notificações
        </h1>
        <hr className="my-4 bg-white" />
        <p className="lead font-weight-bold">
          Notificações presentes no sistema:
        </p>
        <div className="table-responsive">
          <table className="table table-striped table-hover table-dark bg-dark text-center">
            <thead>
              <tr>
                <th scope="col" className=" text-left">
                  ID
                </th>
                <th scope="col" className=" text-left">
                  UBS/MEDICAMENTO
                </th>
                <th scope="col" className=" text-center">
                  DATA
                </th>
              </tr>
            </thead>
            <tbody>
              {notific.map((not) => (
                <tr>
                  <th className="align-middle text-left" scope="row ">
                    {not.id}
                  </th>
                  <td className="align-middle text-left ">
                    <details>
                      <summary>
                        <b>
                          {not.ubs}:
                          <span className="text-danger">FALTANDO</span>
                          <br />
                          {not.id_med}
                        </b>
                        {not.med}
                      </summary>

                      <section>
                        <hr className="border border-white bg-white mx-0 my-2 p-0" />

                        <div>
                          <b className="text-danger">OBS. DO PACIENTE: </b>
                          {not.com}
                        </div>
                      </section>
                    </details>
                  </td>
                  <td className="align-middle text-center">
                    {formatDate(not.data)}
                  </td>
                  <td className="align-middle text-right">
                    <div className="btn-group">
                      <button type="hidden" name="id" value={not.id} />

                      <button
                        type="submit"
                        className="btn btn-outline-danger font-weight-bold"
                        form="formDelete"
                        onClick={() => delForm(not.id)}
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
      </div>

      {/* <!-- DIV para hovering alerts --> */}
      <div id="displayAlerts" className="fixed-top container"></div>
    </div>
  );
}
