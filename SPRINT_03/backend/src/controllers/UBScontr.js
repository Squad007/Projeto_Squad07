const UBSmodel = require('../models/UBSmodel');

class UBScontr {
  getUBSdropdown(req, res) {
    UBSmodel.getUBSdropdown(req, res);
  }

  getUBSwDENcount(req, res) {
    UBSmodel.getUBSwDENcount(req, res);
  }

  postUBS(req, res) {
    const {
      cadastrado_por_id,
      nomeUbs,
      descricao,
      endereco,
      bairro,
      distrito,
      zona,
      cidade,
      uf,
      cep,
      telefone,
      latitude,
      longitude,
    } = req.body;

    UBSmodel.cadastrado_por_id = cadastrado_por_id.toUpperCase();
    UBSmodel.nomeUbs = nomeUbs.toUpperCase();
    UBSmodel.descricao = descricao;
    UBSmodel.endereco = endereco.toUpperCase();
    UBSmodel.bairro = bairro.toUpperCase();
    UBSmodel.distrito = distrito.toUpperCase();
    UBSmodel.zona = zona.toUpperCase();
    UBSmodel.cidade = cidade.toUpperCase();
    UBSmodel.uf = uf.toUpperCase();
    UBSmodel.cep = cep.toUpperCase();
    UBSmodel.telefone = telefone.toUpperCase();
    UBSmodel.latitude = latitude.toUpperCase();
    UBSmodel.longitude = longitude.toUpperCase();
    UBSmodel.postUBS(req, res);
  }

  putUBS(req, res) {
    const {
      id,
      cadastrado_por_id,
      nomeUbs,
      descricao,
      endereco,
      bairro,
      distrito,
      zona,
      cidade,
      uf,
      cep,
      telefone,
      latitude,
      longitude,
    } = req.body;

    UBSmodel.id = id;
    UBSmodel.cadastrado_por_id = cadastrado_por_id.toUpperCase();
    UBSmodel.nomeUbs = nomeUbs.toUpperCase();
    UBSmodel.descricao = descricao;
    UBSmodel.endereco = endereco.toUpperCase();
    UBSmodel.bairro = bairro.toUpperCase();
    UBSmodel.distrito = distrito.toUpperCase();
    UBSmodel.zona = zona.toUpperCase();
    UBSmodel.cidade = cidade.toUpperCase();
    UBSmodel.uf = uf.toUpperCase();
    UBSmodel.cep = cep.toUpperCase();
    UBSmodel.telefone = telefone.toUpperCase();
    UBSmodel.latitude = latitude.toUpperCase();
    UBSmodel.longitude = longitude.toUpperCase();
    UBSmodel.putUBS(req, res);
  }

  deleteUBS(req, res) {
    const { id } = req.body;

    UBSmodel.id = id;
    UBSmodel.deleteUBS(req, res);
  }
}

module.exports = new UBScontr();
