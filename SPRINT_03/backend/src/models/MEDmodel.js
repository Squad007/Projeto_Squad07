const connection = require('../config/connection');

class MEDmodel {
  constructor() {
    this.id;
    this.nome;
    this.msg;

    this.page;
    this.pageSize = 50;
  }

  getMEDdropdown(req, res) {
    connection.query('SELECT id,nome FROM medicamento', (error, result) => {
      error ? res.send(error) : res.json(result);
    });
  }

  getMEDwDENcount(req, res) {
    connection.query(
      `
    SELECT med.*,  count(den.medicamento_id) qtde 
    FROM  medicamento med 
    LEFT JOIN denuncia den ON med.id = den.medicamento_id 
    GROUP BY med.id 
    ORDER BY qtde DESC`,
      (error, result) => {
        error ? res.send(error) : res.json(result);
      }
    );
  }

  getMEDtotalPages(req, res) {
    connection.query(
      `select ceil(COUNT(id)/${this.pageSize}) as qty from medicamento`,
      (error, result) => {
        error ? res.send(error) : res.json(result);
      }
    );
  }

  getMEDbyPage(req, res) {
    connection.query(
      `
    SELECT med.*,  count(den.medicamento_id) qtde 
    FROM  medicamento med 
    LEFT JOIN denuncia den ON med.id = den.medicamento_id 
    GROUP BY med.id 
    ORDER BY qtde DESC 
    LIMIT ${this.pageSize} 
    OFFSET ${(this.page - 1) * this.pageSize}
      `,
      (error, result) => {
        error ? res.send(error) : res.json(result);
      }
    );
  }
}

module.exports = new MEDmodel();
