import React from "react";
import { DataTable } from "react-native-paper";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Platform,
} from "react-native";

const styles = StyleSheet.create({
  caixa: {
    height: Platform.OS === "web" ? "100vh" : "100%",
  },
  tinyLogo: {
    width: 100,
    height: 50,
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
    textAlign: 'center'
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
    width: "50%",
    marginBottom: 20,
  },
  texto: {
    fontSize: 15,
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  img: {
    backgroundColor: '#cecece',
    padding:50
  },  
  mapa:{
    width:'100%',
    height:'50%',
    marginTop:'10%'
   
   
  },

  rodape: {
    textAlign: "center",
    marginTop: "auto",
  },
});
const Notificacao = () => {
  return (
    <View style={styles.caixa}>
      <View style={styles.tinyBack}>
        <TouchableOpacity style={styles.btnMenu}>
          <Text style={styles.texto}>MENU</Text>
        </TouchableOpacity>
        <Image
          style={styles.tinyLogo}
          source={require("../../assets/logo.png")}
        />
      </View>
      <Text style={styles.titulo}>Verifique no Mapa as Notificações</Text>
      <View style={styles.mapa}>
        <Image style={styles.mapa}source={require("../../assets/mapa.jpeg")} />
      </View>
      <Text style={styles.rodape}>© Squad 007 Recode Pro 2020</Text>
    </View>
  );
};

export default Notificacao;
