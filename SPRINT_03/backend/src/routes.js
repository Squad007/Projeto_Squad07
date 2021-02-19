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
routes.get('/ubs/DENcount', UBScontr.getUBSwDENcount); // usar para os pins --OK
routes.get('/den', DENcontr.getDEN); // lista completa notificação --OK
routes.get('/den/byMonth/:month/:year', DENcontr.getDENbyMonth); // filtro por mês/ano
routes.get('/den/byUBS/:ubsid', DENcontr.getDENbyUBS); // notificação por UBS  --OK
routes.get('/med/dropdown', MEDcontr.getMEDdropdown); // Select medicamento --OK
routes.get('/ubs/dropdown', UBScontr.getUBSdropdown); // Select ubs --OK
routes.post('/den', DENcontr.postDEN); // enviar notificação --OK
routes.post('/msg', MSGcontr.postMSG); // enviar msg --OK

//SITE ADM ######################
//SITE ADM ######################
//SITE ADM ######################
routes.get('/adm/login', ADMcontr.loginADM); // login
routes.get('/med/DENcount', MEDcontr.getMEDwDENcount); // lista completa medicamentos --OK
routes.get('/med/totalPages', MEDcontr.getMEDtotalPages); // retorna numero de paginas
routes.get('/med/page/:page', MEDcontr.getMEDbyPage); // acesso por numero da pagina
routes.get('/den/forADM', DENcontr.getDENforADM); // lista completa notificacao --OK
routes.get('/msg', MSGcontr.getAllMSG); // lista completa msg --OK
routes.get('/adm', ADMcontr.getAllADM); // lista completa adm --OK

routes.post('/ubs', UBScontr.postUBS); // cadastra nova ubs --OK
routes.post('/med', MEDcontr.postMED); // cadastra novo medicamento --OK
routes.post('/adm', ADMcontr.postADM); // cadastra novo adm --OK (falta "if" para confirmar a senha)

routes.put('/ubs', UBScontr.putUBS); // atualiza ubs por id --OK
routes.put('/med', MEDcontr.putMED); // atualiza medicamento por id --OK

routes.delete('/ubs/:id', UBScontr.deleteUBS); // apaga ubs por id --OK
routes.delete('/med/:id', MEDcontr.deleteMED); // apaga medicamento por id --OK
routes.delete('/den/:id', DENcontr.deleteDEN); // apaga notificacao por id --OK
routes.delete('/msg/:id', MSGcontr.deleteMSG); // apaga mensagem por id --OK
routes.delete('/adm/:username', ADMcontr.deleteADM); // apaga mensagem por id --OK

module.exports = routes;
