const ADMmodel = require('../models/ADMmodel');
const crypto = require('crypto');

class ADMcontr {
  loginADM(req, res) {
    const { username, senha } = req.body;

    ADMmodel.username = username.toUpperCase();
    ADMmodel.senha = crypto.createHash('md5').update(senha).digest('hex');
    ADMmodel.loginADM(req, res);
  }

  getAllADM(req, res) {
    ADMmodel.getAllADM(req, res);
  }

  postADM(req, res) {
    const { username, nome, imagem, email, senha } = req.body;

    ADMmodel.username = username.toUpperCase();
    ADMmodel.nome = nome.toUpperCase();
    ADMmodel.imagem = imagem;
    ADMmodel.email = email.toUpperCase();
    ADMmodel.senha = crypto.createHash('md5').update(senha).digest('hex');
    ADMmodel.postADM(req, res);
  }

  deleteADM(req, res) {
    const { username } = req.params;

    ADMmodel.username = username.toUpperCase();
    ADMmodel.deleteADM(req, res);
  }
}

module.exports = new ADMcontr();
