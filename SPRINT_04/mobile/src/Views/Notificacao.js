import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Platform,
  ScrollView,
  StatusBar,
} from "react-native";

import { Entypo } from '@expo/vector-icons';

const styles = StyleSheet.create({
  caixa: {
    height: Platform.OS === "web" ? "100vh" : "100%",
  },
  tinyLogo: {
    width: 122,
    height: 70,
    justifyContent: 'center'
  },
  tinyBack: {
    backgroundColor: "#00b9b3",
    padding: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titulo: {
    color: "#00b9b3",
    fontSize: 32,
    marginTop: 20,
    fontWeight: "bold",
    padding: 10,
    textAlign: "center",
  },
  btn: {
    backgroundColor: "#28a745",
    marginTop: 30,
    padding: 8,
    borderRadius: 4,
    width: "70%",
    marginBottom: 20,
    marginLeft: 50,
  },
  btnMenu: {
    backgroundColor: "#6f42c1",
    marginTop: 12,
    padding: 10,
    borderRadius: 4,
    width: "30%",
    marginBottom: 20,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  texto: {
    fontSize: 15,
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  textoMenu: {
    fontSize: 17,
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },  
  img: {
    backgroundColor: "#cecece",
    padding: 50,
  },
  mapa: {
    width: Platform.OS === "web" ? "95vw" : 360,
    height: Platform.OS === "web" ? "100vh" : 180,
    marginTop: 20,
    marginLeft: Platform.OS === "web" ? 20 : 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 15,
  },

  rodape: {
    textAlign: "center",
    marginTop: Platform.OS === "web" ? 30 : "70%",
  },
});

const Notificacao = ({ navigation }) => {
  return (
    <ScrollView style={styles.caixa}>
        <View style={styles.tinyBack}>
          <TouchableOpacity style={styles.btnMenu} onPress={() => navigation.openDrawer()}>
            <Text style={styles.textoMenu}><Entypo name="menu" size={24} color="white" /> MENU</Text>
          </TouchableOpacity>
          <Image
            style={styles.tinyLogo}
            source={require("../../assets/logo.png")}
          />
        </View>
      <Text style={styles.titulo}>Verifique no Mapa as Notificações</Text>
      <View style={styles.mapa}>
        <Image style={styles.mapa} source={require("../../assets/mapa.jpeg")} />
      </View>
      <Text style={styles.rodape}>© Squad 007 Recode Pro 2020</Text>
    </ScrollView>
  );
};

export default Notificacao;
