const connection = require('../config/connection');

class UBSmodel {
  constructor() {
    this.id;
    this.nome;
    this.msg;
  }

  getUBSdropdown(req, res) {
    connection.query('SELECT id,nomeUbs FROM ubs', (error, result) => {
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
}

module.exports = new UBSmodel();
