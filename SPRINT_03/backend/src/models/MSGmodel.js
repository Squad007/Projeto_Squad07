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

  deleteMSG(req, res) {
    connection.query(
      `delete from fale_conosco where id=${this.id}`,
      (error, result) => {
        error
          ? res.send(error)
          : res.status(201).send(`Mensagem ${this.id} apagada!`);
      }
    );
  }
}

module.exports = new MSGmodel();
