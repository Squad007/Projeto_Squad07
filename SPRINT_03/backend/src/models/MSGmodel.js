const connection = require('../config/connection');

class MSGmodel {
  constructor() {
    this.id;
    this.nome;
    this.msg;
    this.email;
  }

  getAllMSG(req, res) {
    connection.query(
      'SELECT * FROM fale_conosco ORDER BY fale_conosco.id DESC',
      (error, result) => {
        error ? res.send(error) : res.json(result);
      }
    );
  }

  postMSG(req, res) {
    connection.query(
      `insert into fale_conosco (nome, msg, email) values ('${this.nome}','${this.msg}','${this.email}')`,
      (error, result) => {
        error ? res.send(error) : res.status(201).send('Mensagem enviada');
      }
    );
  }
}

module.exports = new MSGmodel();
