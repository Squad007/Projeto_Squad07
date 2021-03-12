import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Image,
  Alert,
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
    marginTop: 10,
    fontWeight: "bold",
    padding: 20,
    textAlign: "center",
  },
  inputs: {
    width: "100%",
    padding: 10,
  },
  input: {
    backgroundColor: "white",
    width: "100%",
    padding: 8,
    marginTop: 12,
    borderRadius: 8,
  },
  btn: {
    backgroundColor: "#6f42c1",
    marginTop: 12,
    padding: 10,
    borderRadius: 4,
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
    fontSize: 18,
    color: "white",
    textAlign: "center",
  },
  labels: {
    fontWeight: "bold",
    fontSize: 15,
    padding: 5,
    marginTop: 5,
  },
  textArea: {
    height: 100,
    backgroundColor: "white",
    width: "100%",
    borderRadius: 8,
  },
  rodape: {
    textAlign: "center",
    marginTop: "auto",
  },
});


const FaleConosco = ({navigation}) => {

  function msg(){
    Alert.alert("Mensagem Enviada!!");
  }

  return (
    <View style={styles.caixa}>
      <View style={styles.tinyBack}>

          <TouchableOpacity style={styles.btnMenu} onPress={() => navigation.openDrawer()}>
            <Text style={styles.texto}><Entypo name="menu" size={24} color="white" /> MENU</Text>
          </TouchableOpacity>
          <Image
            style={styles.tinyLogo}
            source={require("../../assets/logo.png")}
          />
        </View>
      <View>
        <Text style={styles.titulo}>Enviar Mensagem</Text>
      </View>

      <View style={styles.inputs}>
        <Text style={styles.labels}>Nome</Text>
        <TextInput placeholder="Digite seu Nome" style={styles.input} />
        <Text style={styles.labels}>Email(opcional)</Text>
        <TextInput
          placeholder="Digite seu E-mail"
          style={styles.input}
          
        />
        <Text style={styles.labels}>Mensagem</Text>
        <TextInput
          style={styles.textArea}
          underlineColorAndroid="transparent"
          placeholder="Digite uma mensagem"
          placeholderTextColor="grey"
          numberOfLines={8}
          multiline={true}
        />
        <TouchableOpacity style={styles.btn} onPress={msg}>
          <Text style={styles.texto}>Enviar</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.rodape}>© Squad 007 Recode Pro 2020</Text>
    </View>
  );
};

export default FaleConosco;
