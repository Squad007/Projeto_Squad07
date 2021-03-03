const connection = require("../config/connection");

class UBSmodel {
  constructor() {
    this.id;
    this.cadastrado_por_id;
    this.nomeUbs;
    this.descricao;
    this.endereco;
    this.bairro;
    this.distrito;
    this.zona;
    this.cidade;
    this.uf;
    this.cep;
    this.telefone;
    this.latitude;
    this.longitude;
    this.searchInput;
  }

  getUBSdropdown(req, res) {
    connection.query("SELECT id,nomeUbs FROM ubs", (error, result) => {
      error ? res.send(error) : res.json(result);
    });
  }

  getUBSwDENcount(req, res) {
    connection.query(
      `
      SELECT ubs.*,  count(den.ubs_id) qtde
      FROM  ubs
      LEFT JOIN denuncia den 
      ON ubs.id = den.ubs_id 
      GROUP BY ubs.id
      ORDER BY ubs.id DESC
       `,
      (error, result) => {
        error ? res.send(error) : res.json(result);
      }
    );
  }
I

  getUBSbySearchInput(req, res) {
    connection.query(
      `
      SELECT ubs.*,  count(den.ubs_id) qtde
      FROM  ubs
      LEFT JOIN denuncia den 
      ON ubs.id = den.ubs_id 
      WHERE ubs.nomeUbs LIKE '%${this.searchInput}%'
      GROUP BY ubs.id 
      ORDER BY ubs.nomeUbs     
      `,
      (error, result) => {
        error ? res.send(error) : res.json(result);
      }
    );
  }
  postUBS(req, res) {
    connection.query(
      `INSERT INTO ubs (cadastrado_por_id, nomeUbs, descricao, endereco, bairro, distrito, zona, cidade, uf, cep, telefone, latitude, longitude) VALUES ('${this.cadastrado_por_id}', '${this.nomeUbs}', '${this.descricao}', '${this.endereco}', '${this.bairro}', '${this.distrito}', '${this.zona}', '${this.cidade}', '${this.uf}', '${this.cep}', '${this.telefone}', '${this.latitude}', '${this.longitude}')`,
      (error, result) => {
        error ? res.send(error) : res.status(201).send("UBS cadastrada");
      }
    );
  }

  putUBS(req, res) {
    connection.query(
      `UPDATE ubs SET cadastrado_por_id='${this.cadastrado_por_id}', nomeUbs='${this.nomeUbs}', descricao='${this.descricao}', endereco='${this.endereco}', bairro='${this.bairro}', distrito='${this.distrito}', zona='${this.zona}', cidade='${this.cidade}', uf='${this.uf}', cep='${this.cep}', telefone='${this.telefone}', latitude='${this.latitude}', longitude='${this.longitude}' WHERE id=${this.id}`,
      (error, result) => {
        error ? res.send(error) : res.status(201).send("UBS atualizada");
      }
    );
  }

  deleteUBS(req, res) {
    connection.query(`delete from ubs where id=${this.id}`, (error, result) => {
      error ? res.send(error) : res.status(201).send(`UBS ${this.id} apagada!`);
    });
  }
}

module.exports = new UBSmodel();
