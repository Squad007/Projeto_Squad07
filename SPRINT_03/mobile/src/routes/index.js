import React from "react";
import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Drower from "./Drower";

const Routes = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Drower />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default Routes;
