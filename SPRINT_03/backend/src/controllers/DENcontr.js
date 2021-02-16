const DENmodel = require('../models/DENmodel');

class DENcontr {
  getDEN(req, res) {
    DENmodel.getDEN(req, res);
  }

  getDENforADM(req, res) {
    DENmodel.getDENforADM(req, res);
  }

  getDENbyMonth(req, res) {
    const { month, year } = req.params;

    DENmodel.monthFilter = month;
    DENmodel.yearFilter = year;
    DENmodel.getDENbyMonth(req, res);
  }

  getDENbyUBS(req, res) {
    const { ubsid } = req.params;

    DENmodel.ubsidFilter = ubsid;
    DENmodel.getDENbyUBS(req, res);
  }

  postDEN(req, res) {
    const { ubs_id, medicamento_id, comentario, data_ocorrencia } = req.body;

    DENmodel.ubs_id = ubs_id;
    DENmodel.medicamento_id = medicamento_id;
    DENmodel.comentario = comentario;
    DENmodel.data_ocorrencia = data_ocorrencia;
    DENmodel.postDEN(req, res);
  }
}

module.exports = new DENcontr();
