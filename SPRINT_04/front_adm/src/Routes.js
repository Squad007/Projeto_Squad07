import React from 'react';
import { Switch } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Ubs from './Pages/Ubs/Ubs';
import Medicamentos from './Pages/Medicamentos/Medicamentos';
import Notificacaos from './Pages/Notificacaos/Notificacaos';
import FaleConosco from './Pages/FaleConosco/FaleConosco';
import Adms from './Pages/Adms/Adms';
import RoutesPrivate from './RoutesPrivate';
import RoutesPrivate2 from './RoutesPrivate2';

export default function Rotas() {
  return (
    <Switch>
      <RoutesPrivate2 path="/" exact component={Home} />
      <RoutesPrivate path="/ubs" exact component={Ubs} />
      <RoutesPrivate path="/medicamentos" exact component={Medicamentos} />
      <RoutesPrivate path="/notificacao" exact component={Notificacaos} />
      <RoutesPrivate path="/faleConosco" exact component={FaleConosco} />
      <RoutesPrivate path="/adms" exact component={Adms} />
      <RoutesPrivate path="*" exact component={Home} />
      <RoutesPrivate2 path="*" exact component={Home} />
    </Switch>
  );
}
