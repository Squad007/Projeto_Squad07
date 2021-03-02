const connection = require('../config/connection');

class ADMmodel {
  constructor() {
    this.username;
    this.nome;
    this.imagem;
    this.email;
    this.senha;

    this.token = '123abc';
  }

  loginADM(req, res) {
    connection.query(
      `SELECT username,nome,imagem,email FROM administrador WHERE username='${this.username}' AND senha='${this.senha}'`,
      (error, result) => {
        error
          ? res.send(error)
          : res.json(
              result.length === 1
                ? { ...result[0], token: this.token }
                : { msg: 'Combinacao username/senha nao encontrado' }
            );
      }
    );
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

  deleteADM(req, res) {
    connection.query(
      `delete from administrador where username='${this.username}'`,
      (error, result) => {
        error
          ? res.send(error)
          : res.status(201).send(`Usuário(a) ${this.username} apagado(a)!`);
      }
    );
  }
}

module.exports = new ADMmodel();
