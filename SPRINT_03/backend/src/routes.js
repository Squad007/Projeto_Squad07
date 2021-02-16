const { Router } = require('express');

// const ADMcontr = require('./controllers/ADMcontr');
const DENcontr = require('./controllers/DENcontr');
const MEDcontr = require('./controllers/MEDcontr');
const MSGcontr = require('./controllers/MSGcontr');
const UBScontr = require('./controllers/UBScontr');

const routes = new Router();

//SITE USUARIO ######################
//SITE USUARIO ######################
//SITE USUARIO ######################
//SITE USUARIO ######################
//SITE USUARIO ######################
routes.get('/ubs/DENcount', UBScontr.getUBSwDENcount); // usar para os pins
routes.get('/den', DENcontr.getDEN); // lista completa notificação
routes.get('/den/byMonth/:month/:year', DENcontr.getDENbyMonth); // filtro por mês/ano
routes.get('/den/byUBS/:ubsid', DENcontr.getDENbyUBS); // notificação por UBS
routes.get('/med/dropdown', MEDcontr.getMEDdropdown); // Select medicamento
routes.get('/ubs/dropdown', UBScontr.getUBSdropdown); // Select ubs
routes.post('/den', DENcontr.postDEN); // enviar notificação
routes.post('/msg', MSGcontr.postMSG); // enviar msg

//SITE ADM ######################
//SITE ADM ######################
//SITE ADM ######################
//SITE ADM ######################
//SITE ADM ######################
routes.get('/med/DENcount', MEDcontr.getMEDwDENcount);
routes.get('/med/totalPages', MEDcontr.getMEDtotalPages);
routes.get('/med/page/:page', MEDcontr.getMEDbyPage);
routes.get('/den/forADM', DENcontr.getDENforADM);
routes.get('/msg', MSGcontr.getAllMSG);

module.exports = routes;
