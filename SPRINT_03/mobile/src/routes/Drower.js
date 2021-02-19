import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";


import Home from "../Views/Home";
import Sobre from "../Views/Sobre";
import Notificacao from "../Views/Notificacao";
import Notifique from "../Views/Notifique";
import FaleConosco from "../Views/FaleConosco";

import { AntDesign } from '@expo/vector-icons';

const routeDrawer = createDrawerNavigator();

const Drawer = () => {
  return (
    <routeDrawer.Navigator initialRouteName="Home">
      <routeDrawer.Screen name="HOME" component={Home} />
      <routeDrawer.Screen name="SOBRE" component={Sobre} />
      <routeDrawer.Screen name="NOTIFICAÇÕES" component={Notificacao} />
      <routeDrawer.Screen name="NOTIFIQUE" component={Notifique} />
      <routeDrawer.Screen name="CONTATO" component={FaleConosco} />
    </routeDrawer.Navigator>
  );
};


export default Drawer;
