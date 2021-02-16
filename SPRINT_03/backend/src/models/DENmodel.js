const connection = require('../config/connection');

class DENmodel {
  constructor() {
    this.id;
    this.ubs_id;
    this.medicamento_id;
    this.comentario;
    this.data_ocorrencia;
    this.monthFilter;
    this.yearFilter;
    this.ubsidFilter;
  }

  getDEN(req, res) {
    connection.query(
      'SELECT * FROM denuncia INNER JOIN ubs ON denuncia.ubs_id = ubs.id INNER JOIN medicamento ON denuncia.medicamento_id = medicamento.id order BY denuncia.id DESC; ',
      (error, result) => {
        error ? res.send(error) : res.json(result);
      }
    );
  }

  getDENforADM(req, res) {
    connection.query(
      `
          SELECT
          den.id id,
          den.comentario com,
          ubs.nomeUbs ubs,
          med.nome med,
          med.id id_med,
          den.data_ocorrencia data
          FROM
          denuncia den
          JOIN ubs ON den.ubs_id = ubs.id
          JOIN medicamento med ON den.medicamento_id = med.id
          ORDER BY den.data_ocorrencia DESC 
      `,
      (error, result) => {
        error ? res.send(error) : res.json(result);
      }
    );
  }

  getDENbyUBS(req, res) {
    connection.query(
      `SELECT den.id, den.ubs_id, ubs.nomeUbs, med.nome, den.data_ocorrencia 
        FROM denuncia den
        INNER JOIN ubs ON den.ubs_id = ubs.id 
        INNER JOIN medicamento med ON den.medicamento_id = med.id 
        WHERE ubs_id = ${this.ubsidFilter} 
        ORDER BY den.id DESC`,
      (error, result) => {
        error ? res.send(error) : res.json(result);
      }
    );
  }

  getDENbyMonth(req, res) {
    connection.query(
      `SELECT * FROM denuncia INNER JOIN ubs ON denuncia.ubs_id = ubs.id INNER JOIN medicamento ON denuncia.medicamento_id = medicamento.id WHERE MONTH(data_ocorrencia) = ${this.monthFilter} AND  YEAR(data_ocorrencia) = ${this.yearFilter} ORDER BY denuncia.id DESC`,
      (error, result) => {
        error ? res.send(error) : res.json(result);
      }
    );
  }

  postDEN(req, res) {
    connection.query(
      `INSERT INTO denuncia(ubs_id, medicamento_id, comentario, data_ocorrencia) VALUES ('${this.ubs_id}', '${this.medicamento_id}', '${this.comentario}', '${this.data_ocorrencia}')`,
      (error, result) => {
        error ? res.send(error) : res.status(201).send('Notificacao enviada');
      }
    );
  }
}

module.exports = new DENmodel();
