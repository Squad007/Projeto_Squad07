const MEDmodel = require('../models/MEDmodel');

class MEDcontr {
  getMEDdropdown(req, res) {
    MEDmodel.getMEDdropdown(req, res);
  }

  getMEDwDENcount(req, res) {
    MEDmodel.getMEDwDENcount(req, res);
  }

  getMEDtotalPages(req, res) {
    MEDmodel.getMEDtotalPages(req, res);
  }

  getMEDbyPage(req, res) {
    const { page } = req.params;

    MEDmodel.page = page;
    MEDmodel.getMEDbyPage(req, res);
  }

  getMEDbySearchInput(req, res) {
    const { searchInput } = req.params;

    MEDmodel.searchInput = searchInput;
    MEDmodel.getMEDbySearchInput(req, res);
  }

  postMED(req, res) {
    const { cadastrado_por_id, id, nome, observacao } = req.body;

    MEDmodel.cadastrado_por_id = cadastrado_por_id.toUpperCase();
    MEDmodel.id = id.toUpperCase();
    MEDmodel.nome = nome.toUpperCase();
    MEDmodel.observacao = observacao;
    MEDmodel.postMED(req, res);
  }

  putMED(req, res) {
    const { cadastrado_por_id, id, nome, observacao } = req.body;

    MEDmodel.cadastrado_por_id = cadastrado_por_id.toUpperCase();
    MEDmodel.id = id.toUpperCase();
    MEDmodel.nome = nome.toUpperCase();
    MEDmodel.observacao = observacao;
    MEDmodel.putMED(req, res);
  }

  deleteMED(req, res) {
    const { id } = req.params;

    MEDmodel.id = id;
    MEDmodel.deleteMED(req, res);
  }
}

module.exports = new MEDcontr();
