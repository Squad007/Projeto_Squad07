const connection = require('../config/connection');

class MEDmodel {
  constructor() {
    this.id;
    this.cadastrado_por_id;
    this.nome;
    this.observacao;
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
    ORDER BY med.data_cadastro DESC`,
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
    ORDER BY med.data_cadastro DESC 
    LIMIT ${this.pageSize} 
    OFFSET ${(this.page - 1) * this.pageSize}
      `,
      (error, result) => {
        error ? res.send(error) : res.json(result);
      }
    );
  }

  postMED(req, res) {
    connection.query(
      `INSERT INTO medicamento (cadastrado_por_id, id, nome, observacao) VALUES ('${this.cadastrado_por_id}', '${this.id}', '${this.nome}', '${this.observacao}');`,
      (error, result) => {
        error
          ? res.send(error)
          : res.status(201).send('Medicamento cadastrado');
      }
    );
  }

  putMED(req, res) {
    connection.query(
      `UPDATE medicamento SET cadastrado_por_id='${this.cadastrado_por_id}', nome='${this.nome}', observacao='${this.observacao}' WHERE id='${this.id}';`,
      (error, result) => {
        error
          ? res.send(error)
          : res.status(201).send('Medicamento atualizado');
      }
    );
  }

  deleteMED(req, res) {
    connection.query(
      `delete from medicamento where id='${this.id}'`,
      (error, result) => {
        error
          ? res.send(error)
          : res.status(201).send(`Medicamento ${this.id} apagado!`);
      }
    );
  }
}

module.exports = new MEDmodel();
