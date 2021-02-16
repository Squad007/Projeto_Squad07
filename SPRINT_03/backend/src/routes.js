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
routes.get('/ubs/DENcount', UBScontr.getUBSwDENcount);
routes.get('/den', DENcontr.getDEN);
routes.get('/den/byMonth/:month/:year', DENcontr.getDENbyMonth);
routes.get('/den/byUBS/:ubsid', DENcontr.getDENbyUBS);
routes.get('/med/dropdown', MEDcontr.getMEDdropdown);
routes.get('/ubs/dropdown', UBScontr.getUBSdropdown);
routes.post('/den', DENcontr.postDEN);
routes.post('/msg', MSGcontr.postMSG);

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
