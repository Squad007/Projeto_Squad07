import React from 'react'
import {SafeAreaView} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

// import Tab from './Tab'
import Drower from './Drower';
const Routes = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
            {/* <Tab /> */}
            <Drower />
        </NavigationContainer>
    </SafeAreaView>
  )
}

export default Routes