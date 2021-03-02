import React, { useState, useEffect } from 'react';

export default function Report() {
  const [ano, setAno] = useState('2020');
  const [notific, setNotific] = useState([]);
  const [urlDen, setUrlDen] = useState('http://localhost:3001/den/');
  const todos = [
    'JANEIRO',
    'FEVEREIRO',
    'MARÇO',
    'ABRIL',
    'MAIO',
    'JUNHO',
    'JULHO',
    'AGOSTO',
    'SETEMBRO',
    'OUTUBRO',
    'NOVEMBRO',
    'DEZEMBRO',
  ];

  function filtroMes(e) {
    let mes = e.target.value;
    return setUrlDen(`http://localhost:3001/den/byMonth/${mes}/${ano}`);
  }

  // --------------------------------------- Export report .CSV
  const objectToCsv = function (data) {
    const csvRows = [];
    // get the headers
    const headers = Object.keys(data[0]);
    csvRows.push(headers.join(','));

    // loop over the rows
    for (const row of data) {
      const values = headers.map((header) => {
        const escape = ('' + row[header]).replace(/"/g, '\\"');
        return `"${escape}"`;
      });
      csvRows.push(values.join(','));
    }
    return csvRows.join('\n');
  };

  const download = function (data) {
    const blob = new Blob([data], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('hidden', '');
    a.setAttribute('href', url);
    a.setAttribute('download', 'SOS_medicamento.csv');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const getReport = async function () {
    const res = await fetch(urlDen);
    const json = await res.json();

    const data = json.map((row) => ({
      ubs: row.nomeUbs,
      medicamento: row.nome,
      ocorrencia: row.data_ocorrencia,
      registro: row.data_denuncia,
    }));

    const csvData = objectToCsv(data);
    download(csvData);
  };

  // --------------------------------------- Api notificações
  useEffect(() => {
    async function fetchMyAPI() {
      const response = await fetch(urlDen);
      setNotific(await response.json());
    }
    fetchMyAPI();
  }, [urlDen]);

  // --------------------------------------- Formatação da data
  const formatDate = (rawDate) => {
    const myDate = new Date(rawDate);
    const d = myDate.getUTCDate();
    const mo = myDate.getUTCMonth() + 1;
    const y = myDate.getUTCFullYear();

    return `${pad(d)}/${pad(mo)}/${y}`;
  };

  function pad(num, size = 2) {
    num = num.toString();
    while (num.length < size) num = '0' + num;
    return num;
  }

  return (
    <div
      className="container"
      style={{ minHeight: 'calc(100vh - 68px - 56px )' }}
    >
      <div className="section-3 row m-0 h-100 d-flex justify-content-center">
        <div
          className="meses col col-md-4 m-1 mx-md-2 my-4 p-3"
          style={{ background: '#00b9b3', borderRadius: '20px', height: '90%' }}
        >
          <h4 className="border-bottom border-white text-white">RELATÓRIOS</h4>
          <select
            className="bg-transparent border-0"
            name="ano"
            id="ano"
            onChange={(e) => setAno(e.target.value)}
          >
            <option value="2020" selected>
              2020
            </option>
            <option value="2021">2021</option>
          </select>

          <div className="text-white text-center flex-column d-flex justify-content-between">
            {todos.map((message, index) => (
              <button
                key={message}
                value={index + 1}
                className="btn text-white"
                onClick={filtroMes}
                style={{
                  fontWeight: 'bold',
                }}
              >
                {message}
              </button>
            ))}
          </div>
        </div>

        <div
          className="relatorio col col-md-7 m-1 mx-md-2 my-4 p-3"
          style={{
            background: '#00b9b3',
            borderRadius: '20px',
            maxHeight: '550px',
            height: '550px',
          }}
        >
          <div className="">
            <h4 className="border-bottom border-white text-white text-center pb-2">
              RELATÓRIO DO MÊS{' '}
            </h4>
          </div>
          <div className="table-responsive" style={{ height: '85%' }}>
            <table className="table table-borderless">
              <tbody>
                {notific.length > 0 ? (
                  notific.map((not, index) => (
                    <tr
                      key={index}
                      className="m-3 row border-bottom border-white"
                    >
                      <td className="col">
                        <div>
                          <b className="nome_ubs">{not.nomeUbs}</b>
                          <p className="lead font-weight-bold text-white ">
                            {not.nome}
                          </p>
                        </div>
                      </td>

                      <td>
                        <div className="justify-content-center flex-column py-auto d-flex align-items-center">
                          <p className="m-0 text-white">Data da Falta:</p>
                          <p style={{ fontSize: '26px', color: '#fff' }}>
                            {formatDate(not.data_ocorrencia)}
                          </p>
                          <p style={{ fontSize: '12px' }}>
                            registro: {formatDate(not.data_denuncia)}
                          </p>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <b>Sem registros no momento</b>
                )}
              </tbody>
            </table>
          </div>

          <button
            style={{
              background: '#6f42c1',
              border: 'none',
              borderRadius: '20px',
              width: '200px',
              right: '10px',
              bottom: '10px',
              position: 'absolute',
              color: '#fff',
            }}
            onClick={getReport}
          >
            arquivo .CSV
          </button>
        </div>
      </div>
    </div>
  );
}
