import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "../Views/Home";
import Sobre from "../Views/Sobre";
import Notificacao from "../Views/Notificacao";
import Notifique from "../Views/Notifique";
import FaleConosco from "../Views/FaleConosco";

const routeDrawer = createDrawerNavigator();

const Drawer = () => {
  return (
    <routeDrawer.Navigator initialRouteName="Home">
      <routeDrawer.Screen name="Principal" component={Home} />
      <routeDrawer.Screen name="Sobre" component={Sobre} />
      <routeDrawer.Screen name="Notificações" component={Notificacao} />
      <routeDrawer.Screen name="Notifique" component={Notifique} />
      <routeDrawer.Screen name="Contato" component={FaleConosco} />
    </routeDrawer.Navigator>
  );
};


export default Drawer;
