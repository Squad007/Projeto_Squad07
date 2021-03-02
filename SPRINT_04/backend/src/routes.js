const { Router } = require('express');

const ADMcontr = require('./controllers/ADMcontr');
const DENcontr = require('./controllers/DENcontr');
const MEDcontr = require('./controllers/MEDcontr');
const MSGcontr = require('./controllers/MSGcontr');
const UBScontr = require('./controllers/UBScontr');

const routes = new Router();

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
routes.post('/adm/login', ADMcontr.loginADM); // login
routes.get('/med/DENcount', MEDcontr.getMEDwDENcount); // lista completa medicamentos
routes.get('/med/totalPages', MEDcontr.getMEDtotalPages); // retorna numero de paginas
routes.get('/med/page/:page', MEDcontr.getMEDbyPage); // acesso por numero da pagina
routes.get('/den/forADM', DENcontr.getDENforADM); // lista completa notificacao
routes.get('/msg', MSGcontr.getAllMSG); // lista completa msg
routes.get('/adm', ADMcontr.getAllADM); // lista completa adm

routes.post('/ubs', UBScontr.postUBS); // cadastra nova ubs
routes.post('/med', MEDcontr.postMED); // cadastra novo medicamento
routes.post('/adm', ADMcontr.postADM); // cadastra novo adm

routes.put('/ubs', UBScontr.putUBS); // atualiza ubs por id
routes.put('/med', MEDcontr.putMED); // atualiza medicamento por id

routes.delete('/ubs/:id', UBScontr.deleteUBS); // apaga ubs por id
routes.delete('/med/:id', MEDcontr.deleteMED); // apaga medicamento por id
routes.delete('/den/:id', DENcontr.deleteDEN); // apaga notificacao por id
routes.delete('/msg/:id', MSGcontr.deleteMSG); // apaga mensagem por id
routes.delete('/adm/:username', ADMcontr.deleteADM); // apaga mensagem por id

module.exports = routes;
