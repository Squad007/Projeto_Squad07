import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Login from '../Views/Login';
import Ubs from '../Views/Ubs'
import Medicamentos from '../Views/Medicamentos'
import Notificacao from '../Views/Notificacao'
import FaleConosco from '../Views/FaleConosco'
import CadastrarAdm from '../Views/CadastrarAdm'

const routeTab = createBottomTabNavigator()



const Tab = () => {
  return (
    <routeTab.Navigator  initialRouteName='Login' tabBarOptions={{
      activeTintColor: 'white',
      inactiveTintColor: 'blue',
      labelStyle: {fontSize: 16},
      activeBackgroundColor: '#00b9b3',
     
      
      
      
    }}>
      <routeTab.Screen name="Login" component={Login}/>
      <routeTab.Screen name="Ubs" component={Ubs}/>
      <routeTab.Screen name="Medicamentos" component={Medicamentos}/>
      <routeTab.Screen name="Notificações" component={Notificacao}/>
      <routeTab.Screen name="FeedBack's" component={FaleConosco}/>
      <routeTab.Screen name="Novo ADM" component={CadastrarAdm}/>
     
    </routeTab.Navigator>
  )
}

export default Tab