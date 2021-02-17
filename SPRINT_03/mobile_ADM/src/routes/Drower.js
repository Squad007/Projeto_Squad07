import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import Login from '../Views/Login';
import Ubs from '../Views/Ubs'
import Medicamentos from '../Views/Medicamentos'
import Notificacao from '../Views/Notificacao'
import FaleConosco from '../Views/FaleConosco'
import CadastrarAdm from '../Views/CadastrarAdm'

const routeDrawer = createDrawerNavigator()



const Drawer = () => {
  return (
    <routeDrawer.Navigator  initialRouteName='Login' tabBarOptions={{
      activeTintColor: 'white',
      inactiveTintColor: 'blue',
      labelStyle: {fontSize: 16},
      activeBackgroundColor: '#00b9b3',
     
      
      
      
    }}>
      <routeDrawer.Screen name="Login" component={Login}/>
      <routeDrawer.Screen name="Ubs" component={Ubs}/>
      <routeDrawer.Screen name="Medicamentos" component={Medicamentos}/>
      <routeDrawer.Screen name="Notificações" component={Notificacao}/>
      <routeDrawer.Screen name="FeedBack's" component={FaleConosco}/>
      <routeDrawer.Screen name="Novo ADM" component={CadastrarAdm}/>
     
    </routeDrawer.Navigator>
  )
}

export default Drawer