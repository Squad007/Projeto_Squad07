const UBSmodel = require('../models/UBSmodel');

class UBScontr {
  getUBSdropdown(req, res) {
    UBSmodel.getUBSdropdown(req, res);
  }

  getUBSwDENcount(req, res) {
    UBSmodel.getUBSwDENcount(req, res);
  }
}

module.exports = new UBScontr();
