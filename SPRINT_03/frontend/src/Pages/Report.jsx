import React, { useState, useEffect } from "react";

export default function Report() {
  const [notific, setNotific] = useState([]);
  const [urlDen, setUrlDen] = useState("http://localhost:3001/den/");

  // --------------------------------------- Export report .CSV
  const objectToCsv = function(data) {

    const csvRows = [];
    // get the headers
    const headers = Object.keys(data[0]);
    csvRows.push(headers.join(','));

    // loop over the rows
    for (const row of data) {
      const values = headers.map(header => {
        const escape = (''+row[header]).replace(/"/g, '\\"');
        return `"${escape}"`;
      });
      csvRows.push(values.join(','));
    }
    return csvRows.join('\n');
  }

  const download = function(data) {
    const blob = new Blob([data], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('hidden', '');
    a.setAttribute('href', url);
    a.setAttribute('download', 'SOS_medicamento.csv');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

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
    const d = myDate.getDay();
    const mo = myDate.getMonth() + 1;
    const y = myDate.getFullYear();

    return `${pad(d)}/${pad(mo)}/${y}`;
  };

  function pad(num, size = 2) {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
  }

  return (
    <div
      className="section-3 row d-flex justify-content-center m-0 h-100"
      style={{ minHeight: "calc(100vh - 68px - 56px )" }}
    >
      <div
        className="meses m-4 p-3"
        style={{ background: "#00b9b3", width: "380px", borderRadius: "20px" }}
      >
        <h4 className="border-bottom border-white text-white">RELATÓRIOS</h4>

        <div className="text-white text-center flex-column d-flex justify-content-between">
          <button className="btn" value="1" onClick={() => setUrlDen(`http://localhost:3001/den/byMonth/1/2021`)}>JANEIRO</button>
          <button className="btn" value="2" onClick={() => setUrlDen(`http://localhost:3001/den/byMonth/2/2021`)}>FEVEREIRO</button>
          <button className="btn" value="3" onClick={() => setUrlDen(`http://localhost:3001/den/byMonth/3/2021`)}>MARÇO</button>
          <button className="btn" value="4" onClick={() => setUrlDen(`http://localhost:3001/den/byMonth/4/2020`)}>ABRIL</button>
          <button className="btn" value="5" onClick={() => setUrlDen(`http://localhost:3001/den/byMonth/5/2020`)}>MAIO</button>
          <button className="btn" value="6" onClick={() => setUrlDen(`http://localhost:3001/den/byMonth/6/2020`)}>JUNHO</button>
          <button className="btn" value="7" onClick={() => setUrlDen(`http://localhost:3001/den/byMonth/7/2020`)}>JULHO</button>
          <button className="btn" value="8" onClick={() => setUrlDen(`http://localhost:3001/den/byMonth/8/2020`)}>AGOSTO</button>
          <button className="btn" value="9" onClick={() => setUrlDen(`http://localhost:3001/den/byMonth/9/2020`)}>SETEMBRO</button>
          <button className="btn" value="10" onClick={() => setUrlDen(`http://localhost:3001/den/byMonth/10/2020`)}>OUTUBRO</button>
          <button className="btn" value="11" onClick={() => setUrlDen(`http://localhost:3001/den/byMonth/11/2020`)}>NOVEMBRO</button>
          <button className="btn" value="12" onClick={() => setUrlDen(`http://localhost:3001/den/byMonth/12/2020`)}>DEZEMBRO</button>
        </div>
        
      </div>
      <div
        className="relatorio col-5 m-4 p-3 overflow-auto"
        style={{ background: "#00b9b3", borderRadius: "20px", height: "580px" }}
      >
        <div className="">
        <h4 className="border-bottom border-white text-white text-center pb-2">RELATÓRIO DO MÊS DE </h4>
        </div>

        {notific.length > 0 && 
            notific.map((not, index) => (
              <div key={index} className="m-3 row border-bottom border-white">
                <div className="col-8 ">
                  <b className="nome_ubs">{not.nomeUbs}</b>
                  <p className="lead font-weight-bold ">{not.nome}</p>
                  
                </div>
                <div className="col-4 justify-content-center flex-column py-auto d-flex align-items-center">
                  <p className="m-0">Data da Falta:</p>
                  <p style={{fontSize: "25px"}} >{formatDate(not.data_ocorrencia)}</p>
                  <p style={{fontSize: ""}} >{formatDate(not.data_denuncia)}</p>
                </div>
              </div>
            ))}
      <button onClick={getReport}>.CSV</button>
      </div>
    </div>
  );
}
