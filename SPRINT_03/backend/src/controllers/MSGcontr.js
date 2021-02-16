const MSGmodel = require('../models/MSGmodel');

class MSGcontr {
  getAllMSG(req, res) {
    MSGmodel.getAllMSG(req, res);
  }

  postMSG(req, res) {
    const { nome, msg, email } = req.body;

    MSGmodel.nome = nome;
    MSGmodel.msg = msg;
    MSGmodel.email = email;
    MSGmodel.postMSG(req, res);
  }

  deleteMSG(req, res) {
    const { id } = req.body;

    MSGmodel.id = id;
    MSGmodel.deleteMSG(req, res);
  }
}

module.exports = new MSGcontr();
