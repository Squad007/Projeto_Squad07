import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from '../Views/Home'
import Sobre from '../Views/Sobre'
import Notificacao from '../Views/Notificacao'
import Notifique from '../Views/Notifique'
import FaleConosco from '../Views/FaleConosco'

const routeTab = createBottomTabNavigator()



const Tab = () => {
  return (
    <routeTab.Navigator  initialRouteName='Home' tabBarOptions={{
      activeTintColor: 'white',
      inactiveTintColor: 'blue',
      labelStyle: {fontSize: 16},
      activeBackgroundColor: '#00b9b3',
     
      
      
      
    }}>
      <routeTab.Screen name="Home" component={Home}/>
      <routeTab.Screen name="Sobre" component={Sobre}/>
      <routeTab.Screen name="Notificação" component={Notificacao}/>
      <routeTab.Screen name="Notifique" component={Notifique}/>
      <routeTab.Screen name="Contato" component={FaleConosco}/>
    </routeTab.Navigator>
  )
}

export default Tab