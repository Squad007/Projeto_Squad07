const connection = require('../config/connection');

class ADMmodel {
  constructor() {
    this.id;

    this.username;
    this.nome;
    this.imagem;
    this.email;
    this.senha;
  }

  getAllADM(req, res) {
    connection.query('SELECT * FROM administrador', (error, result) => {
      error ? res.send(error) : res.json(result);
    });
  }

  postADM(req, res) {
    connection.query(
      `INSERT INTO administrador (username, nome, imagem, email, senha) values ('${this.username}','${this.nome}', '${this.imagem}', '${this.email}', '${this.senha}')`,
      (error, result) => {
        error
          ? res.send(error)
          : res.status(201).send('Administrador cadastrado!');
      }
    );
  }
}

module.exports = new ADMmodel();
