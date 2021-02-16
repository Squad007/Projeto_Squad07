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
}

module.exports = new MEDcontr();
